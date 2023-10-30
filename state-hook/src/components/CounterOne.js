// This file shows how to use "useReducer" hook for simple state and actions

// import the hooks
import React, {useReducer} from 'react'

//define initial state
const initialState = 0

//define reducer function
//         (currentState, action) returns one value which is the new state.
const reducer = (state, action) => {
    switch(action) { // actions could be increment, decrement, reset
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterOne() {
    // (reducer funct, initial state)
    const [count, dispatch] = useReducer(reducer, initialState) //useReducer returns the current state as a pair of values that you get a hold of using array destructuring syntax
                // dispatch method allows you to execute the code corresponding to a particular action.
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne