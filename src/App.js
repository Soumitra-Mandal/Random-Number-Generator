import React, {useState,useEffect } from 'react';
import './App.css';

function App() {
const [time, setTime] = useState(new Date().toLocaleTimeString());

useEffect(()=>{
  setInterval(()=>{
    setTime(new Date().toLocaleTimeString());
  }, 1000);

});


  return (
    <div className="App">
     <p id = "time">{time}</p>
      
    </div>
  );
}

export default App;
