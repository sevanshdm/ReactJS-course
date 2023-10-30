//This file shows what context consumption used to look like before hooks... it sucked.
//import React from 'react'
import { UserContext, ChannelContext } from '../App'

// This section is for useReducer with useContext
import React, {useContext} from 'react'
import { CountContext } from '../App'

function ComponentF() {
    const countContext = useContext(CountContext)
    return (
        <div>
            ComponentF - {countContext.countState}
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )
}

// function ComponentF() {
//     return (
//         <div>
//             <UserContext.Consumer>
//                 {user => {
//                     return (
//                         <ChannelContext>
//                             {channel => {
//                                 return (
//                                     <div>
//                                         User context value {user}, channel context value {channel}
//                                     </div>
//                                 )
//                             }}
//                         </ChannelContext>
//                     )
//                 }}
//             </UserContext.Consumer>
//         </div>
//     )
// }

export default ComponentF