import React, { Component } from 'react'

//This file shows examples of Conditional Rendering.

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: false
      }
    }

  render() {

    //Short circuit operator
    // return this.state.isLoggedIn && <div>Welcome Shrek</div>

    //Ternary Conditional Operator (This is the typically the way to do it.)
    return(
        this.state.isLoggedIn ? 
        <div>Welcome Shrek</div> :
        <div>Welcome Guest</div>
    )

    // Element Variable approach
    // let message 
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome Shrek</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>

    // if/else
        // if (this.state.isLoggedIn) {
        //     return <div>Welcome Shrek</div>
            
        // }else {
        //     return <div>Welcome Guest</div>
        // }

    // return (
    //     <div>
    //         <div>Welcome Shrek</div>
    //         <div>Welcome Guest</div>
    //     </div>
    // )
  }
}

export default UserGreeting