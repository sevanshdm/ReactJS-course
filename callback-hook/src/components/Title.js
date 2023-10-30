import React from 'react'

function Title() {
    console.log('Rendering Title')
    return (
        <h2>
            useCallback hook
        </h2>
    )
}

//Prevents a functional component from being re-rendered if its props or state do not change
export default React.memo(Title)