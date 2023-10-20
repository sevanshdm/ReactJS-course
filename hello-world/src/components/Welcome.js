// Class components needs these imports.
import React, {Component} from 'react'

//Class component
class Welcome extends Component {
    render(){
        return <h1>Welcome {this.props.name} a.k.a {this.props.epithet} 
        </h1>
    }
}

export default Welcome