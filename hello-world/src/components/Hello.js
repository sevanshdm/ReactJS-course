import React from 'react'

const Hello = () => {
    // return (
    //    // This is JSX not HTML.
    //     <div className="dummyClass">
    //         <h1>Hello Shrek</h1>
    //     </div>
    // )
    
    // This how to do the same thing as above withoug JSX      
    return React.createElement('div', 
    {id: 'hello', className: 'dummyClass'},             
    React.createElement('h1', null, 'Hello Shrek'))
}                     //type, options,

export default Hello