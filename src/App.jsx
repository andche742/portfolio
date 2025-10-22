import { useState } from 'react'
import './App.css'
import Project from './components/project';
import Nav from './components/nav';
import headshot from './assets/headshot.png'

function App() {
  return (
    <div>
      <Nav/>
      <div className="mainInfo">
        <img className="pfp" src={headshot} height="500" width="500" alt="Headshot"/>
        <div className="textInfo">
          <h1 className="typing">
            Andrew Chen
          </h1>
          <h2>
            SJSU Data Science
          </h2>
        </div>
      </div>
    </div>
 );
}


export default App;
