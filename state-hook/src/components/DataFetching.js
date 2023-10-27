import React, {useState, useEffect} from 'react'
//axios is a library for fectching data etc...
import axios from 'axios'

function DataFetching() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts') //this returns a promise
            .then(res => {
                console.log(res)
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, []) // empty dependeny array prevents an infinite loop of fetching data.

    return (
        <div>
            <ul>
                {           // for each post, return a list item where key = post.id and inner html is post.title
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetching