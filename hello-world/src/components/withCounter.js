// This file shows a Higher Order Component (HOC)

import React from 'react'

// It's a function that accepts the original component and returns a new component.
const withCounter = WrappedComponent => { // was UpdatedComponent = OriginalComponent 
    class withCounter extends React.Component { // was NewComponent extends React.Component
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
            return <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
            />
        }
    }
    return withCounter
}

export default withCounter