// This file has to do with Reder Props Pattern

import React, { Component } from 'react'

class User extends Component {
    render() {
        return (
            <div>     {/*This is if you have a function as a prop in app.js*/}
                {this.props.render(true)}
            </div>
            )
    }
}

export default User