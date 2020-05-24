import React from 'react';
import './DicePicker.css';
import uniqueId from 'lodash/uniqueId';
import Dice from "../Dice/Dice";

function DicePicker(props) {
  return (
    <div className="dice-picker">
      {[4, 6, 8, 10, 12, 20].map((diceSize) => {
        return (
          <div key={diceSize} className="dice-picker__dice_container">
            <Dice
              maxValue={diceSize}
              diceValue={diceSize}
              onClick={() => { props.addDiceCallback({ maxValue: diceSize, id: uniqueId() }) }}
              ariaLabel={"Roll a d" + diceSize}
            />
          </div>
        )
      })}
    </div>
  );
}

export default DicePicker;