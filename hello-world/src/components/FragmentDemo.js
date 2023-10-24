import React from 'react'

function FragmentDemo() {
      
    return (
        /*Used to be <div>, React.Fragment won't show up client side(h1 and p tag will have no parent tag.*/
        <React.Fragment>
            <h1>Fragment Demo</h1>
            <p>This describes the Fragment Demo component</p>
        </React.Fragment>

    )
}

export default FragmentDemo