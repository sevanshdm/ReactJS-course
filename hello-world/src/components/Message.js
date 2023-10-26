// Class components needs these imports.
import React, {Component} from 'react'

//Class component
class Message extends Component {

    
    constructor(){
        super() // this is required because it extends Reacts component class

        //initialize state object
        this.state = {
            // property
            message: 'Welcome visitor' 
        }
    }

    changeMessage() {
        // This is the method you need to call to alter the state of a class component.
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    
    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}> Subscribe </button>
            </div>
        )
    }
}

export default Message