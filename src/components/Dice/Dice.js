import React from 'react';
import './Dice.css';
var classNames = require('classnames');

function Dice(props) {
  return (
    <button
      className={classNames({
        'dice': true,
        'd4': props.maxValue === 4,
        'd6': props.maxValue === 6,
        'd8': props.maxValue === 8,
        'd10': props.maxValue === 10,
        'd12': props.maxValue === 12,
        'd20': props.maxValue === 20,
      })}
      onClick={() => {props.onClick()}}
    >
      {props.children}
      {props.diceValue}
    </button>
  );
}

export default Dice;