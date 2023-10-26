// This file has to do with Reder Props Pattern

import React, { Component } from 'react'

class HoverCounterTwo extends Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <h2 onMouseOver={incrementCount}>Hovered {count} times</h2>
        )
    }
}

export default HoverCounterTwo