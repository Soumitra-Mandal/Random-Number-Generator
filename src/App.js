import React, {useState } from 'react';
import './App.css';

function App() {

const [num1, setNum1] = useState(1);
const [num2, setNum2] = useState(10);
const [rnd, setRnd] = useState(1);

const handleClick = ()=>{
  if(num1!==null && num2 !== null){
   var r = getRandInteger(num1, num2);
   setRnd(r);
   

  }

} 


const handleChange1 = (e)=>{
  setNum1(parseInt(e.target.value));
} 

const handleChange2 = (e)=>{
  setNum2(parseInt(e.target.value));
} 

const getRandInteger = (min, max)=> {
  return Math.floor(Math.random()*(max-min+1)+min);
}

  return (
    <div className="App">
    <h1>Random Number Generator</h1>
    <div id='container'>
    <div id = 'min'>
    <label htmlFor = "num1">Min</label>
    <input type="number" name="num1" id = 'num1' onChange = {handleChange1} />
    </div>
    
    <div id = 'max'>
    <label htmlFor = "num2">Max</label>
    <input type = 'number' name = "num2" id = 'num2'  onChange = {handleChange2} />
    </div>
   
    <div onClick = {handleClick} id = 'btn'>Generate</div>
    <p>{rnd}</p>
    </div>
   
    </div>
  );
}

export default App;
