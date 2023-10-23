import React from 'react'

// function Greet() {
//     return <h1> Hello Shrek</h1>
// }

// Functional Component

            // Takes props from App.js file, Allows the props in App.js to function. This was (props) => {}, this would still work btw.
const Greet = ({name, epithet}) => {
    //console.log(props)
    //const {name, epithet} = props // If Greet(props)=>{}, then this line is how to destructure

    // use () if you're returning something that's takes more than one line. Return a div, because you can only return one element. 
    return (
         <div>{/*This was props.name*/}
            <h1>Hello {name} a.k.a {epithet} {/*The {} is a JSX feature that allows React to evaluate the JSX expression. with them, they'd be interpreted as just text. */}
            </h1> 
            {/* {props.children} */}
        </div>
    )
}

// Exporting as a default allows to you import the component with any name in another file.
export default Greet

// This is a named export
// export const Greet = () => <h1>Hello Shrek</h1>