import React from 'react'

//Event handling in functional components

function FunctionClick() {

    function clickHandler() {
        console.log('Button clicked')
    }

  return (
    <div> {/*onclick="clickHandler" in HTML, React is camel cased and uses a function as event handler instead of a string*/}
        <button onClick={clickHandler}>Click</button>
    </div>          //Not clickHandler(). which is a function call
  )
}

export default FunctionClick