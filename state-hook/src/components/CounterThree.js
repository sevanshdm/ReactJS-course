// This file shows how to use multiple "useReducer" hooks 

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

function CounterThree() {
    // count refers to the entire state object
    const [count, dispatch] = useReducer(reducer, initialState) //useReducer returns the current state as a pair of values that you get a hold of using array destructuring syntax
                // dispatch method allows you to execute the code corresponding to a particular action.

    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
    
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>Reset</button>

            <div>Count - {countTwo}</div>
            <button onClick={() => dispatchTwo('increment')}>Increment</button>
            <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
            <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </div>
    )
}

export default CounterThree