import React, {useState } from 'react';
import './App.css';

function App() {

const [nm, setNm] = useState('');
const [name, setName] = useState('');

const handleClick = ()=>{
  if(nm!==''){
    setName(nm);
    setNm('');
  }

} 


const handleChange = (e)=>{
  setNm(e.target.value);
} 

// Use a conditonal rendering statement 
// refer to docs
  return (
    <div className="App">
    <h1>Welcome</h1>
    <input type="text" name="name" id = 'nm' onChange = {handleChange} value = {nm}/>
    <button onClick = {handleClick} id = 'btn'>Enter</button>
<p>{name}</p>
    </div>
  );
}

export default App;
