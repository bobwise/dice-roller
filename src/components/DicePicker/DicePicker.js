import React from 'react';
import './DicePicker.css';
import uniqueId from 'lodash/uniqueId';

function DicePicker(props) {
  return (
    <div className="dice-picker">
      <button className='dice d4' onClick={() => { props.addDiceCallback({maxValue: 4, id: uniqueId()}) }}>4</button>
      <button className='dice d6' onClick={() => { props.addDiceCallback({maxValue: 6, id: uniqueId()}) }}>6</button>
      <button className='dice d8' onClick={() => { props.addDiceCallback({maxValue: 8, id: uniqueId()}) }}>8</button>
      <button className='dice d10' onClick={() => { props.addDiceCallback({maxValue: 10, id: uniqueId()}) }}>10</button>
      <button className='dice d12' onClick={() => { props.addDiceCallback({maxValue: 12, id: uniqueId()}) }}>12</button>
      <button className='dice d20' onClick={() => { props.addDiceCallback({maxValue: 20, id: uniqueId()}) }}>20</button>
    </div>
  );
}

export default DicePicker;