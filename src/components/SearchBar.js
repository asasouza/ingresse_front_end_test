//Modules
import debounce from 'lodash/debounce';
import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import injectSheet from 'react-jss';

class SearchBar extends Component {
	
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		};

		this._handleChangeTerm = this._handleChangeTerm.bind(this);
		this._search = debounce(this._search.bind(this), 500);

	}

	_search(term) {
		this.props.handleSearch({ term: term || 'game' });
	}

	_handleChangeTerm(event) {
		this.setState({ term: event.target.value });

		this._search(event.target.value);
	}

	render() {
		const { searchBar, searchBar__icon, searchBar__input } = this.props.classes;
		return (
			<div className={searchBar}>
				<FaSearch className={searchBar__icon} />
				<input 
					className={searchBar__input} 
					onChange={this._handleChangeTerm} 
					placeholder='Busque por séries, programas, etc...'
					type='text' 
					value={this.state.term}  
				/>
			</div>
		);
	}
}

const styles = {
	searchBar: {
		margin: '10px 3px',
		position: 'relative',
	},
	searchBar__icon: {
		position: 'absolute',
		left: 10,
		top: 10,
		color: '#f5f5f5'
	},
	searchBar__input: {
		backgroundColor: 'rgba(37, 35, 35, 0.5)',
		border: '1px solid #3d3f40',
		borderRadius: '4px',
		color: '#f5f5f5',
		display: 'block',
		fontSize: '20px',
		fontWeight: '700',
		padding: '5px 5px 5px 35px',
		transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
		width: 'calc(100% - 40px)',
		'&:focus': {
			borderColor: '#333',
			outline: 0,
			boxShadow: '0 0 0 0.2rem rgba(0, 123, 255, 0)'
		}
	}
};

export default injectSheet(styles)(SearchBar);
