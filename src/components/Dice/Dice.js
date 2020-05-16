import React, { useState } from 'react';
import './Dice.css';
import Triangle from "../Icons/Triangle";
import Hexagon from "../Icons/Hexagon";
import Diamond from "../Icons/Diamond";
import Pentagon from "../Icons/Pentagon";
import Nonagon from "../Icons/Nonagon";
import Square from "../Icons/Square";
var classNames = require('classnames');

function Dice(props) {

  return (
      <button
        aria-label={props.ariaLabel ? props.ariaLabel : props.diceValue + " rolled on a d" + props.maxValue + ". Click to remove."}
        className={classNames({
          'dice': true,
          'd4': props.maxValue === 4,
          'd6': props.maxValue === 6,
          'd8': props.maxValue === 8,
          'd10': props.maxValue === 10,
          'd12': props.maxValue === 12,
          'd20': props.maxValue === 20,
        })}
        onClick={() => { props.onClick() }}
      >
        {props.maxValue === 4 && <Triangle />}
        {props.maxValue === 6 && <Square />}
        {props.maxValue === 8 && <Diamond />}
        {props.maxValue === 10 && <Pentagon />}
        {props.maxValue === 12 && <Nonagon />}
        {props.maxValue === 20 && <Hexagon />}
        {props.children}
        <span class='dice-label'>
          {props.diceValue}
        </span>
      </button>
  );
}

export default Dice;