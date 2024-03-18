import './App.css';
import {useState} from 'react';
import Counter from './Counter';

function App() {
  let[previous,current]=useState('')  
  let Add =()=>{
    current('Rahul');
  }
  let Rem =()=>{
    current('');
  }
  return (
    <div className="App" >
      <h1 style={{color:'red'}}>Hello {previous}</h1>
      <button onClick={Add} style={{margin:'15px'}}>Add Name</button>
      <button onClick={Rem}>Remove Name</button>

      <Counter/>
    </div>
  );
}

export default App;
