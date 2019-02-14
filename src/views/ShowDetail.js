//Modules
import { Container } from 'aphrodite-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Actions
import { fetchShow } from 'ducks/Show';

class ShowDetail extends Component {
	
	componentDidMount() {
		this.props.fetchShow({ id: this.props.match.params.id });
	}

	render() {
		if (this.props.requesting || !this.props.show) {
			return <div>Loading...</div>;
		}
		return (
			<Container fluid lg>
				<div>{this.props.show.name}</div>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		error: state.show.error,
		requesting: state.show.requesting,
		show: state.show.show,
	};
}

export default connect(mapStateToProps, { fetchShow })(ShowDetail);
