// This file shows how to set state based on the previous state value.

//Import useState hook
import React, {useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    //
    const incrementFive = () => {
        for(let i = 0; i < 5 ; i++) {   
//Anytime you need to update state value based on the prev state value, always pass in a function that will set the new state value.  
            setCount(prevCount => prevCount + 1) //pass in a funct that has access to the old value and increment that.
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo