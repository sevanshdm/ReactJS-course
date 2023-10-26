import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class ComponentF extends Component {
  render() {
    return ( // Step 3(Consume the context value.)
      <UserConsumer>
        {
            (username) => { // You're passing a function as a child to the consumer component, then return desired JSX.
                return <div>Hello {username} </div>
            }
        }
      </UserConsumer>
    )
  }
}

export default ComponentF