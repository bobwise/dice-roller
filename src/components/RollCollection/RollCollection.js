import React from 'react';
import './RollCollection.css';

function RollCollection(props) {
	return (
		<div className="roll-collection">
			{props.children}
      <div className='roll-collection__total'>Total: X</div>
		</div>
	);
}

export default RollCollection;