import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

//methods as props

class ParentComponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }

      //event bind
      this.greetParent = this.greetParent.bind(this)

    }

    //Define method, take parameter from child.
    greetParent(childName)  {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

  render() {
    return (
      <div>                         {/*Reference to greetParent method as a prop being passed*/}
        <ChildComponent greetHandler={this.greetParent}/>
      </div>
    )
  }
}

export default ParentComponent