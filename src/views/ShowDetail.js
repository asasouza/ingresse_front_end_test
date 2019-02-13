//Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Actions
import { fetchShow } from 'ducks/Show';

class ShowDetail extends Component {
	
	componentDidMount() {
		this.props.fetchShow();
	}

	render() {
		return (
			<div>Show Detail</div>
		);
	}
}

export default connect(null, { fetchShow })(ShowDetail);
