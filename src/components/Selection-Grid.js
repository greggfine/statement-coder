import React, { Component } from 'react';
import Selections from './Selections';
import  './Selection-Grid.css';

class SelectionGrid extends Component{

	render(){
		return (
					<div className="selection-grid">
					<Selections  
						Codes={ this.props.Codes } 
						handleClick={ this.props.handleClick }
						/>
					</div>
				)
	}
}

export default SelectionGrid;
