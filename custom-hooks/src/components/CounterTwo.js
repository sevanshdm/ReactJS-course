// This file contains code for basic counting functionality

import React, {useState} from 'react'
import useCounter from '../hooks/useCounter'

function CounterTwo() {
    // array destructuring for accessing the values and methods from useCounter().
    const [count, increment, decrement, reset] = useCounter(10, 10)
                                                // useCounter(initialCount, value)
    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default CounterTwo