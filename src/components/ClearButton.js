import React from 'react';
import './ClearButton.css';

const ClearButton = ({ handleClear }) => {
	return(
			<button
				onClick={ handleClear }
			>Clear All</button>
		)
	}

	

export default ClearButton;
