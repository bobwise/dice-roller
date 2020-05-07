import React from 'react';
import './Dice.css';
var classNames = require('classnames');

function Dice(props) {
  return (
    <button 
      className={classNames({
        'dice': true,
        'd4': props.diceType === 'd4',
        'd6': props.diceType === 'd6',
        'd8': props.diceType === 'd8',
        'd10': props.diceType === 'd10',
        'd12': props.diceType === 'd12',
        'd20': props.diceType === 'd20',
      })}
      onClick={() => {props.onClick()}}
    >
      {props.diceType}: {props.diceValue}
    </button>
  );
}

export default Dice;