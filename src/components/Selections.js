import React from 'react';


const Selections = ({ Codes, handleClick }) => {
	return Codes.map((code, index) => {
		const category = code.category;
		const codeNum = code.code;
		return <div key={ code.category }
					className="code-selector"
					onClick={ (e) => handleClick(e, category, codeNum) }
				>
					{ code.category } 	
				</div>
	})
}

	

export default Selections;
