import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         errorMsg: ''
      }
    }

    // Place the code to make a GET request in this lifecycle method.
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')

            .then(response => {
                console.log(response)
                this.setState({posts: response.data})
            })
            .catch(e => {
                console.log(e)
                this.setState({errorMsg: 'Error retrieving data'})
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                List of posts
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>) :
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default PostList