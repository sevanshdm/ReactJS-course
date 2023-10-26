// This file is for creating the Context (Step 1)

import React from "react";
                                //You can add a default value as a param
const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export { UserProvider, UserConsumer }
export default UserContext