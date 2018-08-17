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
		this.handleRemove=this.handleRemove.bind(this)
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

	handleRemove(e, index){
		this.setState((prevState) => {
			return {
				results: prevState.results.filter((result) => {
					return result !== prevState.results[index]
				})
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

	 hydrateStateWithLocalStorage(){
	  		let value = localStorage.getItem("results");
	  		for(let key in this.state){
	  			if(localStorage.hasOwnProperty(key)){
	  				this.setState({
	  					results: JSON.parse(value)
	  				})
	  			}
	  		}
	  }

  componentDidMount(){
    this.hydrateStateWithLocalStorage();
  }

  componentDidUpdate(){
  	localStorage.setItem("results", JSON.stringify(this.state.results));
  }

  render() {
  
  	const { Codes, results } = this.state;
  	const headerStyle = {
  		textAlign: 'center', 
  		color: '#3E363F',
  		letterSpacing: '4px',
  		textTransform: 'uppercase',
  		textShadow: '1px 1px 2px #B8B42D, 2px 2px 4px #FFFCE8'
  	}
    return (
      <div>
      <h1 style={ headerStyle }>Statement Coder</h1>
        <SelectionGrid 
        	Codes={ Codes }
        	handleClick={ this.handleClick }
        />
        <hr />
        <DisplayList 
        	handleRemove={ this.handleRemove }
        	results={ results }/>    
        <ClearButton handleClear={ this.handleClear }/>
      </div>
    );
  }
}

export default App;
