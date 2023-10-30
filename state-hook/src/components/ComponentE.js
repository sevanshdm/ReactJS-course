//This file shows how to implement useContext Hook

//import useContext hook
import React, {useContext} from 'react'
import ComponentF from './ComponentF'
// import desired context
// import { UserContext, ChannelContext } from '../App'

function ComponentE() {
    //step 3 call useContext function, passing in the context as its argument
    // const user = useContext(UserContext)
    // const channel = useContext(ChannelContext)

    return (
        
        // this part is for useReducer with useContext, Dingus decided to reuse this file for some reason
        <div>
            <ComponentF/>
        </div>


        // <div>
        //     {user} - {channel}
        // </div>
    )
}

export default ComponentE