// Class components needs these imports.
import React, {Component} from 'react'

//Class component
class Welcome extends Component {
    render(){
        // Destructuring
        const {name, epithet} = this.props 
        //const {state1, state2} = this.state

            // Before destructuring these were this.props.name and this.props.epithet
        return <h1>
            Welcome {name} a.k.a {epithet} 
            </h1>
    }
}

export default Welcome