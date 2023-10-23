import React, { Component } from 'react'

class Counter extends Component {

    
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment() {
        // whenever you need to execute some code after the state has been changed. Place it in the callback funct that's the 2nd param in setState().
        // this.setState(
        //     {
        //         count: this.state.count + 1
        //     }, 
        //     ()=>{
        //         console.log('Callback value', this.state.count) Whevener you need to execute some code after the state has been changed, place it within this callback funct
        //     }
        // )

        // When you need to change state based on the previous state, pass in a function as an argument instead of the regular object.
        this.setState((prevState, props)=> ({
            count: prevState.count + 1
        }))

        console.log(this.state.count)
    }

    incrementFive() {
        //whenever you have have to update the state based on the previous state(above in comments). You need to pass a funct as an argument to set state method instead of 
        //passing in an object./
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()

    }

  render() {
    return (
      <div> Count - {this.state.count} 
        <button onClick = { ()=> this.incrementFive()}>Implement</button>
      </div>
    )
  }
}

export default Counter