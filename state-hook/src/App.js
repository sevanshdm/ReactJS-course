import React from 'react';
import './App.css';
import CounterThree from './components/CounterThree';
//import this for context ex
// import ComponentC from './components/ComponentC';


// Context
//Step 1 create the context
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">

      <CounterThree/>

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
