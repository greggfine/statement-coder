import React from 'react';
import './Display-List.css';


const DisplayItems = ({ results, handleRemove }) => {
		return results.map((result, index) => {
			return (
					<li
						key={ index } >
						{ result.category}
						<span className="code-span">{ result.codeNum }</span> 
						<span 
							onClick={(e) => handleRemove(e, index) }
							className="remove-span"> x</span>
					</li> 
					)
		})
	}

	

export default DisplayItems;
