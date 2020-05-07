import React from 'react';
import './App.css';
import DicePicker from './components/DicePicker/DicePicker';
import Dice from './components/Dice/Dice';

function App() {
  return (
    <div className="App">
      <div className="roll-collection">
        <Dice diceType='d4' diceValue='4' onClick={() => { console.log('delete dice') }}></Dice>
        <Dice diceType='d6' diceValue='6' onClick={() => { console.log('delete dice') }}></Dice>
        <Dice diceType='d8' diceValue='8' onClick={() => { console.log('delete dice') }}></Dice>
        <Dice diceType='d10' diceValue='10' onClick={() => { console.log('delete dice') }}></Dice>
        <Dice diceType='d12' diceValue='12' onClick={() => { console.log('delete dice') }}></Dice>
        <Dice diceType='d20' diceValue='20' onClick={() => { console.log('delete dice') }}></Dice>
        <div className='roll-total'>Total: X</div>
      </div>
      <DicePicker></DicePicker>
      <button>Roll</button>
    </div>
  );
}

export default App;
