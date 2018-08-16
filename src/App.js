import React, { Component } from 'react';
import './App.css';
import SelectionGrid from './components/Selection-Grid';
import DisplayList from './components/Display-List';
import ClearButton from './components/ClearButton';
import Codes from './Codes';

class App extends Component {
	constructor(props){
		super(props)

		this.state={
			Codes,
			results: []
		}


		this.handleClick=this.handleClick.bind(this)
		this.handleClear=this.handleClear.bind(this)
	}



	handleClick(e, category, codeNum){
		this.setState((prevState) => {
			return {
				results: prevState.results.concat([
					{ category, codeNum }
				])
			}
		})
	}

	handleClear(){
		this.setState(() => {
			return {
				results: []
			}
		})
	}

  render() {
  	const { Codes, results } = this.state;
    return (
      <div>
        <SelectionGrid 
        	Codes={ Codes }
        	handleClick={ this.handleClick }
        />
        <DisplayList 
        	results={ results }/>
        <ClearButton handleClear={ this.handleClear }/>
      </div>
    );
  }
}

export default App;
