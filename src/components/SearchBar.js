//Modules
import debounce from 'lodash/debounce';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
//Actions
import { fetchShowList } from 'ducks/Show';

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
		this.props.fetchShowList({ term: term || 'game' });
	}

	_handleChangeTerm(event) {
		this.setState({ term: event.target.value });

		this._search(event.target.value);
	}

	render() {
		return (
			<div>
				<input type='text' onChange={this._handleChangeTerm} value={this.state.term} />
			</div>
		);
	}
}

const styles = {

};

export default connect(null, { fetchShowList })(injectSheet(styles)(SearchBar));
