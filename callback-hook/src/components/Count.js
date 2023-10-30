import React from 'react'

function Count({text, count}) {
    console.log(`Rendering ${text}`)
    return <div>{text} - {count}</div>
    
}

//Prevents a functional component from being re-rendered if its props or state do not change
export default React.memo(Count)