import React from 'react';
import './Display-List.css';
import DisplayItems from './DisplayItems';


const DisplayList = ({ results, handleRemove }) => {
		return (
			<ul className="display-list">
				<DisplayItems 
					handleRemove={ handleRemove }
					results={ results } />
			</ul>
		)
	}

	

export default DisplayList;
