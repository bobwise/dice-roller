import React, { useState } from 'react';
import './App.scss';
import DicePicker from './components/DicePicker/DicePicker';
import Dice from './components/Dice/Dice';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

function App() {

  const [rolledDice, setRolledDice] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalMessage, setTotalMessage] = useState("");

  function addNewDice(dice) {
    // roll it
    dice.value = rollDice(dice.maxValue);
    // add it to the state
    setRolledDice(rolledDice.concat(dice));
    // update the total
    const newTotal = total + dice.value;
    setTotal(newTotal);
    setTotalMessage("Rolled a " + dice.value + ". Total is " + newTotal + ".");
    // setTimeout(setTotalMessage(""), 5000);
  }

  function removeDice(id) {
    // console.log('deleting dice with id: ' + id);

    var removeIndex = rolledDice.map(
      (dice) => { return dice.id }).indexOf(id);

    const newTotal = total - rolledDice[removeIndex].value;

    setTotal(newTotal);
    setTotalMessage("Removed a d " + rolledDice[removeIndex].maxValue + ". New total is " + newTotal);

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
    setTotalMessage("Total is " + newTotal);
    setTotalMessage("");
  }

  function clear() {
    setRolledDice([]);
    setTotal(0);
    setTotalMessage("Total is 0");
    setTotalMessage("");
  }

  function rollDice(maxValue) {
    const value = Math.floor(Math.random() * maxValue) + 1;
    // console.log('rolled a ' + value + ' on a d' + maxValue);
    return value;
  }

  return (
    <div className="App">
      <h1 aria-label="Dice">di.ce</h1>
      <DicePicker addDiceCallback={addNewDice}></DicePicker>
        <TransitionGroup className="roll-collection">
          {rolledDice.map((dice) =>
            <CSSTransition
              key={dice.id}
              timeout={200}
              classNames="dice-animation"
            >
              <Dice
                maxValue={dice.maxValue}
                diceValue={dice.value}
                onClick={() => { removeDice(dice.id) }}
                key={dice.id}
              >
              </Dice>
            </CSSTransition>
          )}
        </TransitionGroup>
      <div className='roll-total'>
        <span aria-live="polite" class="screen-reader-text">{totalMessage}</span>
        <span aria-hidden="true">Total: {total}</span>
      </div>
      <div className="action-container">
        <button class="action-button" onClick={rerollAll}>Roll</button>
        <button class="action-button action-button--secondary" onClick={clear}>Clear</button>
      </div>
      <footer className='siteFooter'>
        <p><span aria-hidden="true">by</span> <a aria-label="Made by Bobwise, with love." href="http://twitter.com/bobwise/">Bobwise</a></p>
      </footer>
    </div>
  );
}

export default App;
