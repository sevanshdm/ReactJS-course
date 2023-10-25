import React from 'react'

// function FRInput() {
//     return (
//         <div>
//             <input type='text'/>
//         </div>
//     )
// }

//Forwarding Ref                        //ref parameter points to the value of the ref attribute from the parent component.
const FRInput = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})

export default FRInput