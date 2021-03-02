import React, { useState } from 'react';
import './App.css';

function App() {


  return (
    <div className="App">
      <Dice />
    </div>
  );
}

function Dice(){
  const [diceValue, setDice] = useState({dice1:6, dice2:6});

  function Roll(){
    const min = 1;
    const max = 6;
    const rand1 = Math.round(min + Math.random() * (max-min));
    const rand2 = Math.round(min + Math.random() * (max-min));
    setDice({dice1: rand1, dice2: rand2})
  }

  return (
    <div id="container">
      <div id="dice-1">
        <img src={diceValue.dice1 + ".jpg"} />
      </div>
      <div id="button">
        <button onClick={Roll}>ROLL</button>
      </div>
      <div id="dice-2">
        <img src={diceValue.dice2 + ".jpg"} />
      </div>
    </div>
  )
}

export default App;

