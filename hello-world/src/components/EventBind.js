import React, { Component } from 'react'

// Event binding in classes

class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        message: 'Hello'
      }

      // this way to Event bind is a good one. WIth line 37.
      //this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: 'Goodbye'
    //     })
    //     console.log(this)
    // }

    // This is another good way to Event Bind. along with line 37. It is experimental, however.
    clickHandler = () => {
      this. setState({
        message: 'Goodbye'
      })
    }

  render() {
    return (
      <div>
        <div> {this.state.message} </div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> This is the first method, but it affects performance. */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> Second method is use arrow function, () are required because returning the value is needed but it too affects performance.*/}
        <button onClick={this.clickHandler}>Click</button> {/* This is the typical way to do it, it's bound on line 13 within the constructor*/}
      </div>
    )
  }
}

export default EventBind