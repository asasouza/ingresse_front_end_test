//Modules
import map from 'lodash/map';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import CardShow from 'components/CardShow';
//Actions
import { fetchShowList } from 'ducks/Show';

class ShowList extends Component {
	
	componentDidMount() {
		this.props.fetchShowList();
	}

	_renderShows() {
		const { shows } = this.props;
		return map(shows, (show, key) => {
			return <CardShow show={show} key={key} />;
		});
	}

	render() {
		console.log(this.props.shows);
		if (!this.props.shows) {
			return null;
		}
		return this._renderShows();
	}
}

function mapStateToProps(state) {
	return {
		shows: state.show.shows
	};
}

export default connect(mapStateToProps, { fetchShowList })(ShowList);
