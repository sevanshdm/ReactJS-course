// This file shows Data fetching with useReducer hooks

import React, {useReducer, useEffect} from 'react'
import axios from 'axios'

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => { //returns the updated state.
    switch(action.type) {
        case 'FETCH-SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }
        case 'FETCH_ERROR':
            return{
                loading: false,
                error: 'Something went wrong',
                post: {}
            }
        default: 
            return state
    }
}

function DataFetchingTwo() {
    //useReducer return a pair of values which are the current state and the dispatch method.
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1') //get request
        .then(response => {
            dispatch({type: 'FETCH_SUCCESS', payload: response.data})
        })
        .catch(error => {
            dispatch({type: 'FETCH_EROR'})
        })
    },[])

    return (
        <div>
            {state.loading ? 'Loading' : state.post.title}
            {state.error ? state.error : null}
        </div>
    )
}

export default DataFetchingTwo