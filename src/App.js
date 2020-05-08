import React, { useState } from 'react';
import './App.scss';
import DicePicker from './components/DicePicker/DicePicker';
import Dice from './components/Dice/Dice';
import Triangle from "./components/Icons/Triangle";

function App() {

  const [rolledDice, setRolledDice] = useState([]);
  const [total, setTotal] = useState(0);

  function addNewDice(dice) {
    // roll it
    dice.value = rollDice(dice.maxValue);
    // add it to the state
    setRolledDice(rolledDice.concat(dice));
    // update the total
    setTotal(total + dice.value);
  }

  function removeDice(id) {
    // console.log('deleting dice with id: ' + id);

    var removeIndex = rolledDice.map(
      (dice) => { return dice.id }).indexOf(id);

    setTotal(total - rolledDice[removeIndex].value);

    setRolledDice(rolledDice.filter(item => item.id !== id));

    // todo put focus on the next item in the tab order
  }

  function rerollAll() {
    var newTotal = 0;
    var newRolledDice = rolledDice.map((dice) => {
      const newDice = {
        id: dice.id,
        maxValue: dice.maxValue,
        value: rollDice(dice.maxValue)
      }

      newTotal += newDice.value;

      return newDice;
    })

    setRolledDice(newRolledDice);
    setTotal(newTotal);
  }

  function rollDice(maxValue) {
    const value = Math.floor(Math.random() * maxValue) + 1;
    // console.log('rolled a ' + value + ' on a d' + maxValue);
    return value;
  }

  return (
    <div className="App">
      {/* <Triangle className='d4'/> */}
      <div className="roll-collection">
        {rolledDice.map((dice) =>
          <Dice
            maxValue={dice.maxValue}
            diceValue={dice.value}
            onClick={() => { removeDice(dice.id) }}
            key={dice.id}
          >
          </Dice>
        )}
      </div>
      <div className='roll-total'>Total: {total}</div>
      <DicePicker addDiceCallback={addNewDice}></DicePicker>
      <button onClick={rerollAll}>Roll</button>
    </div>
  );
}

export default App;
