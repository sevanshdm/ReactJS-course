import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         userName: '',
         comments: '',
         topic: 'react'
      }
    }
                        //event
    handleUsernameChange = (e) => {
        this.setState({
            userName: e.target.value
        })
    }

    handleCommentsChange = (e) => {
        this.setState({
            comments: e.target.value
        })
    }

    handleTopicChange = (e) => {
        this.setState({
            topic: e.target.value
        })
    }

    handleSubmit = (e) => {
        alert(`${this.state.userName} ${this.state.comments} ${this.state.topic}`)
        e.preventDefault() // Prevents page from auto-refreshing after submit is pressed.
    }

    render() {
            const{ userName, comments, topic } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type='text' 
                        value={userName} 
                        onChange={this.handleUsernameChange}/>
                </div>
                <div>
                    <label>Comments</label>
                    <textarea 
                        value={comments} 
                        onChange={this.handleCommentsChange}/>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value='react'>React</option>
                        <option value='angular'>Angular</option>
                        <option value='vue'>Vue</option>
                    </select>
                </div>
                <button type='submit'>Submit</button>
            </form>
        )
    }
}

export default Form