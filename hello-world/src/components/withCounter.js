// This file shows a Higher Order Component (HOC)

import React from 'react'

// It's a function that accepts the original component and returns a new component.
const withCounter = (WrappedComponent, incrementNumber) => { // was UpdatedComponent = OriginalComponent 
    class withCounter extends React.Component { // was NewComponent extends React.Component
        constructor(props) {
            super(props)
        
            this.state = {
                count: 0
            }
        }
    
        incrementCount = () => {
            this.setState(prevState => {         //this comes from the second param passed in the export from either ClickCounter or HoverCounter.js
                return {count: prevState.count + incrementNumber}
            })
        }

        render() {
            return <WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}

                //Spread operator, this passes down what ever remaining props have been specified (From App.js)
                {...this.props} 
            />
        }
    }
    return withCounter
}

export default withCounter