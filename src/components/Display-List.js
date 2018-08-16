import React from 'react';
import './Display-List.css';


const DisplayList = ({ results }) => {
		return results.map((result) => {
			return (
					<li
						key={ result.category }
					>{ result.category}<span>{ result.codeNum }</span> </li> 
					)
		})
	}

	

export default DisplayList;
