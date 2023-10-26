// This file has to do with Higher Order Components

import React, { Component } from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {
    //Before using a HOC
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //         count: 0
    //     }
    // }

    // incrementCount = () => {
    //     this.setState(prevState => {
    //         return {count: prevState.count + 1}
    //     })
    // }

    render() { //From withCounter.js(HOC)
        const {count, incrementCount} = this.props
        return (
            <button onClick={incrementCount}>
            {this.props.name} Clicked {count} times
            </button>               
        )   
    }
}

//While exporting, call the updated component function, passing in the clickcounter component. You're now exporting the HOC
export default withCounter(ClickCounter, 5)
            //(was Updated Component) withCounter is from withCounter.js