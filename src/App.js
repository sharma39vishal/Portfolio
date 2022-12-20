import './App.css';
import Sheet from './components/Sheet';
import About from './components/About';
import { useState } from 'react';
import Projects from './components/Projects';
import Achivements from './components/Achivements';

function App() {
  const[toglepage,changepage]=useState(0);
   return (
    <div className='App' >
      <div  className="App-header">
      <div className='row'>
        <a style={{color:"red"}} className='col' onClick={()=>{changepage(0)}}>Home</a>
        <a style={{color:"red"}} className='col' onClick={()=>{changepage(1)}}>Projects</a>
        <a style={{color:"red"}} className='col' onClick={()=>{changepage(2)}}>Achivements</a>
        <a style={{color:"red"}} className='col' onClick={()=>{changepage(3)}}>Uploader</a>
      </div>
      <br/>
      <div>   
      {toglepage===0 ? <About/>:<></> }
      {toglepage===1 ? <Projects/>:<></> }
      {toglepage===2 ? <Achivements/>:<></> }
      {toglepage===3 ? <Sheet/>:<></> }
      </div>
      </div>
    </div>
  );
}

export default App;
