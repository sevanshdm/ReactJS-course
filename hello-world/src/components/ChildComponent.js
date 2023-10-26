import React from 'react'

                    // access method from parent component as props to be used on line 7
function ChildComponent(props) {
  return (
    <div>               {/*To pass a parameter from child to parent, use an arrow function*/}
        <button onClick={ () => props.greetHandler('child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent