// for useReducer with useContext
import React, {useReducer} from 'react';
import './App.css';

import DataFetchingOne from './components/DataFetchingOne';

//import this for context and useReducer with useContext
// import ComponentC from './components/ComponentC';
// import ComponentA from './components/ComponentA';
// import ComponentB from './components/ComponentB';
// export const CountContext = React.createContext()

// Context
//Step 1 create the context
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

//This crap is for useReducer with useContext
// const initialState = 0

// //define reducer function
// //         (currentState, action) returns one value which is the new state.
// const reducer = (state, action) => {
//     switch(action) { // actions could be increment, decrement, reset
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

function App() {
  // for useReducer with useContext
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">

      <DataFetchingOne/>

       {/* useReduce with useContext */}
       {/* <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
         <div>
           Count - {count}
           <ComponentA/>
           <ComponentB/>
           <ComponentC/>
         </div>
       </CountContext.Provider> */}


      {/*Context... This is step 2 go to ComponentE.js for step 3*/}
      {/* <UserContext.Provider value={'Shrek'}>
        <ChannelContext.Provider value={'Codevolution'}>
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
