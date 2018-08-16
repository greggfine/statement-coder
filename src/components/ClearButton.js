import React from 'react';
import './ClearButton.css';

const ClearButton = ({ handleClear }) => {
	return(
			<button
				onClick={ handleClear }
			>ClearButton</button>
		)
	}

	

export default ClearButton;
