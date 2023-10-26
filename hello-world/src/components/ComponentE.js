import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

class ComponentE extends Component {

    // You can also use this and delete the stuff on line 20
    // static contextType = UserContext

    render() {
        return (
            <div>               {/*This is the Username created from App.js*/}
                Component E context {this.context} 
                <ComponentF/>
            </div>
        )
    }
}

ComponentE.contextType = UserContext

export default ComponentE