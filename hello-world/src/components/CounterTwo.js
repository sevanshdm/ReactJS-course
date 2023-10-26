// This is the container component where you implement the common functionality, that is the state along with the incrementcount method.
// for ClickCounterTwo and HoverCounterTwo

import React, { Component } from 'react'

class CounterTwo extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            count: 0
        }
    } 

    incrementCount = () => {
        this.setState(prevState => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div> {/*CounterTwo doesn't render anything on it's own, it simply renders whatever is passed as the render prop.*/}
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default CounterTwo