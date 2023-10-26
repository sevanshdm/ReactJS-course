import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false
      }
    }

    // Error handling lifecycle method
    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    // Error handling lifecycle method. This method is pretty much used to log the errors.
    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }

    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong</h1>
        } 
        // This refers to the component you are actually rendering.
        return this.props.children
    }
}

export default ErrorBoundary