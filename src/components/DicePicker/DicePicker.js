import React from 'react';
import './DicePicker.css';
import uniqueId from 'lodash/uniqueId';
import Triangle from "../Icons/Triangle";
import Hexagon from "../Icons/Hexagon";
import Diamond from "../Icons/Diamond";
import Pentagon from "../Icons/Pentagon";
import Nonagon from "../Icons/Nonagon";
import Square from "../Icons/Square";

function DicePicker(props) {
  return (
    <div className="dice-picker">
      <button className='dice d4' onClick={() => { props.addDiceCallback({maxValue: 4, id: uniqueId()}) }}><Triangle/><span class='dice-label'>4</span></button>
      <button className='dice d6' onClick={() => { props.addDiceCallback({maxValue: 6, id: uniqueId()}) }}><Square/><span class='dice-label'>6</span></button>
      <button className='dice d8' onClick={() => { props.addDiceCallback({maxValue: 8, id: uniqueId()}) }}><Diamond/><span class='dice-label'>8</span></button>
      <button className='dice d10' onClick={() => { props.addDiceCallback({maxValue: 10, id: uniqueId()}) }}><Pentagon/><span class='dice-label'>10</span></button>
      <button className='dice d12' onClick={() => { props.addDiceCallback({maxValue: 12, id: uniqueId()}) }}><Nonagon/><span class='dice-label'>12</span></button>
      <button className='dice d20' onClick={() => { props.addDiceCallback({maxValue: 20, id: uniqueId()}) }}><Hexagon/><span class='dice-label'>20</span></button>
    </div>
  );
}

export default DicePicker;