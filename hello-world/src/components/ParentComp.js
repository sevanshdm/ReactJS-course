import React, { Component, PureComponent } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'


//This file shows the difference between Reg and Pure Components

// if "extends PureComponent" This page will only render once instead of infinetely, due to Parent checking prev state with
// current state and seeing no difference/changes.
class ParentComp extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            name: 'Shrek'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Shrek'
            })
        }, 2000)
    }

    render() {
        console.log('*****************Parent Comp****************')
            return (
                <div>
                    Parent Component
                    <RegComp name={this.state.name}/>
                    <PureComp name={this.state.name}/>
                </div>
            )
    }
}

export default ParentComp