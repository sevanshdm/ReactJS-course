//This file shows what context consumption used to look like before hooks... it sucked.
import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
    return (
        <div>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext>
                            {channel => {
                                return (
                                    <div>
                                        User context value {user}, channel context value {channel}
                                    </div>
                                )
                            }}
                        </ChannelContext>
                    )
                }}
            </UserContext.Consumer>
        </div>
    )
}

export default ComponentF