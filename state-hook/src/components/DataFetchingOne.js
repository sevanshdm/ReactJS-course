// This file shows Data fetching with useState hooks

//useState for managing component state, useEffect for the side effects
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetchingOne() {
    //define state variables for the data fetching component.
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [post, setPost] = useState({}) //variable to hold the post that you're fetching from an API endpoint


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1') //get request
        .then(response => {
            setLoading(false)
            setPost(response.data)
            setError('')
        })
        .catch(error => {
            setLoading(false)
            setPost({})
            setError('Something went wrong')
        })
    },[])
    return (
        <div>
            {loading ? 'loading' : post.title}
            {error ? error : null}
        </div>
    )
}

export default DataFetchingOne