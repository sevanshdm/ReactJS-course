import React, {useState, useEffect} from 'react'
//axios is a library for fectching data etc...
import axios from 'axios'

function DataFetching() {

    //state variables
    const [post, setPost] = useState({})

    const [id, setId] = useState(1)

    const [idFromButtonClick, setIdFromButtonClick] = useState(1)

    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {                                      //append post id
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`) //this returns a promise
            .then(res => {
                console.log(res)
                setPost(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [idFromButtonClick]) // empty dependency array prevents an infinite loop of fetching data. [id] for when you want to rerender whenever the id value changes

    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <button type='button' onClick={handleClick}>Fetch Post</button>
            <div>{post.title}</div>
            {/* <ul>
                {           // for each post, return a list item where key = post.id and inner html is post.title
                    posts.map(post => (
                        <li key={post.id}>{post.title}</li>
                ))}
            </ul> */}
        </div>
    )
}

export default DataFetching