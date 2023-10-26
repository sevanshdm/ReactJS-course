// This file is responsible for the html displayed in the browser.

import React, { Component } from 'react'
import './App.css';

//default import(you can name it anything you want, not just Greet.)
//import Greet from './components/Greet'

//named export below, the name has to match what was exported
//import { Greet } from './components/Greet'

import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

// The App component represents the view which you see in the browser.
function App() {
  return (
    
    <div className="App">

      {/* Higher Order (HOC) */}
      <ClickCounter/>
      <HoverCounter/>

      {/* <ErrorBoundary>
        <Hero heroName="Shrek"></Hero>
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Donkey"></Hero>
      </ErrorBoundary>
      
      <ErrorBoundary>
        <Hero heroName="Farquaad"></Hero>
      </ErrorBoundary> */}
      {/* 
      {/*<Greet name="Donkey" epithet="The Annoying One"> These props(name and epithet) values are retrieved through the parameter of the Greet function  */}
      {/* <p>This is children props</p> 
      </Greet>
      <Greet name="Gingy" epithet="The Tasty One"/>
        <button>Action</button> */}
      {/* <Greet name="Farquaad" epithet="The Midget"/> 

      <Welcome name="Donkey" epithet="The Annoying One"/> */}
      {/* <Welcome name="Gingy" epithet="The Tasty One"/>
      <Welcome name="Farquaad" epithet="The Midget"/>  */}

      {/* <Hello/> */}
    </div>
  );
} 

export default App;
