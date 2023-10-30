import React from 'react'

function Button({handleClick, children}) {
    console.log('Rendering button - ', children)
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

//Prevents a functional component from being re-rendered if its props or state do not change
export default React.memo(Button)