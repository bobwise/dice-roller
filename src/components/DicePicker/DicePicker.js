import React from 'react';
import './DicePicker.css';

function DicePicker() {
  return (
    <div className="dice-picker">
      <button className='dice d4'>4</button>
      <button className='dice d6'>6</button>
      <button className='dice d8'>8</button>
      <button className='dice d10'>10</button>
      <button className='dice d12'>12</button>
      <button className='dice d20'>20</button>
    </div>
  );
}

export default DicePicker;