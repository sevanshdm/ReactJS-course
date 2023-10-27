import React, { Component } from 'react'

class ClassMouse extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         x: 0,
         y: 0
      }
    }

                      //event
    logMousePosition = e => {
        this.setState({ x: e.clientX, y: e.clientY })
    }

    //Set up event listener once(here)
    componentDidMount() {  
        window.addEventListener('mousemove', this.logMousePosition)
    }
    // Remove event listener functionality
    componentWillUnmount() {
        window.removeEventListener('mousemove', this.logMousePosition)
    }
    
    render() {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        )
    }
}

export default ClassMouse