import React, {Component} from 'react';

class SearchBar extends Component {
  constructor(props) {
  	super(props);
  	this.state = {term : ''};
  }

  render() {
  	return (
  		<div className="search-bar"> 
  			<input value = {this.state.term} 
  				onChange = {event => this.onSearchTermChange(event.target.value)}/>
  		</div>
  	);
  }

  onSearchTermChange(term) {
  	this.setState({term});
  	this.props.videoSearch(this.state.term);
  }
}

export default SearchBar;