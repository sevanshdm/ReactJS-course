// this file creates a custom hook for re-using counter functionality

import {useState} from 'react'

// If an initialCount is specified it's used, else it's the default value of 0. (see CounterTwo for example line 8.)
function useCounter(initialCount = 0, value) { // was useCounter()
    // hooks provide a lot flexibility, You can change this initial value from 0 to an initial count(line 5)
    const [count, setCount] = useState(initialCount) // was useState(0)

    const increment = () => {
        setCount(prevCount => prevCount + value) 
    }

    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }

    const reset = () => {
        setCount(initialCount) // was setCount(0)
    }

    return [count, increment, decrement, reset]
}

export default useCounter