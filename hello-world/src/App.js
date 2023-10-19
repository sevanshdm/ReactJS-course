// This file is responsible for the html displayed in the browser.

import logo from './logo.svg';
import './App.css';

//default import(you can name it anything you want, not just Greet.)
import Greet from './components/Greet'
//named export, the name has to match what was exported
//import { Greet } from './components/Greet'

import Welcome from './components/Welcome'
import Hello from './components/Hello'

// The App component represents the view which you see in the browser.
function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Welcome/> */}
      <Hello/>
    </div>
  );
}

export default App;
