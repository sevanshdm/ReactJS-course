import React from 'react'

function FragmentDemo() {
      
    return (
        //( <> is shorthand ) The issue with this though is that you can't pass in a key attribute.
        /*Used to be <div>, React.Fragment won't show up client side(h1 and p tag will have no parent tag.*/
        <React.Fragment> 
            <h1>Fragment Demo</h1>
            <p>This describes the Fragment Demo component</p>
        </React.Fragment>

    )
}

export default FragmentDemo