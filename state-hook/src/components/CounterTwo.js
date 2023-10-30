// This file shows how to use "useReducer" hook for complex state (state object) and action(action object)

// import the hooks
import React, {useReducer} from 'react'

//define initial state
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

//define reducer function
//         (currentState, action) returns one value which is the new state.
const reducer = (state, action) => {
    switch(action.type) { // actions could be increment, decrement, reset
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value} 
        case 'decrement': //use spread operator (...state) to merge state properties to get expected output.
            return { ...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    // count refers to the entire state object
    const [count, dispatch] = useReducer(reducer, initialState) //useReducer returns the current state as a pair of values that you get a hold of using array destructuring syntax
                // dispatch method allows you to execute the code corresponding to a particular action.
    return (
        <div>
            <div>Count - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type:'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={() => dispatch({type:'decrement', value: 5})}>Decrement 5</button>
            <div>
                <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment Counter 2</button>
                <button onClick={() => dispatch({type:'decrement2', value: 1})}>Decrement Counter 2</button>
            </div>
            <div>
                <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
            </div>
        </div>
    )
}

export default CounterTwo