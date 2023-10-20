import React from 'react'

// function Greet() {
//     return <h1> Hello Shrek</h1>
// }

// Functional Component

            // Takes props from App.js file, Allows the props in App.js to function. This was (props) => {}, this would still work btw.
const Greet = props => {
    console.log(props)

    // use () if you're returning something that's takes more than one line. Return a div, because you can only return one element. 
    return (
        <div>  
            <h1>Hello {props.name} a.k.a {props.epithet} {/*The {} is a JSX feature that allows React to evaluate the JSX expression. with them, they'd be interpreted as just text. */}
            </h1> 
            {props.children}
        </div>
    )
}

// Exporting as a default allows to you import the component with any name in another file.
export default Greet

// This is a named export
// export const Greet = () => <h1>Hello Shrek</h1>