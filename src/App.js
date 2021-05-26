import React, {useState } from 'react';
import './App.css';

function App() {

const [nm, setNm] = useState('');
const [list, setList] = useState([]);

const handleClick = ()=>{
  if(nm!==''){
    setList([...list,nm]);
    setNm('');
  }

} 
const item = list.map((s) =>
  <li key={s.toString()}>
    {s}
  </li>);

const handleChange = (e)=>{
  setNm(e.target.value);
} 


  return (
    <div className="App">
    <h1>To-Do List</h1>
    <input type="text" name="name" id = 'nm' onChange = {handleChange} value = {nm}/>
    <button onClick = {handleClick} id = 'btn'>Enter</button>
    <ol>{item}</ol>
    </div>
  );
}

export default App;
