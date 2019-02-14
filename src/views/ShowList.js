//Modules
import { Container } from 'aphrodite-react';
import map from 'lodash/map';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import CardShow from 'components/CardShow';
import SearchBar from 'components/SearchBar';
//Actions
import { addFavoriteShow, fetchShowList, removeFavoriteShow } from 'ducks/Show';

class ShowList extends Component {
	
	componentDidMount() {
		this.props.fetchShowList({ term: 'game' });
	}

	_renderShows() {
		const { addFavoriteShow, favorites, shows, removeFavoriteShow } = this.props;
		return map(shows, (show, key) => {
			return (
				<CardShow 
					addFavorite={id => addFavoriteShow({ id })} 
					isFavorite={favorites.indexOf(parseInt(key)) > -1}
					key={key} 
					show={show} 
					removeFavorite={id => removeFavoriteShow({ id })}
					
				/>
			);
		});
	}

	render() {
		if (!this.props.shows) {
			return null;
		}
		return (
			<Container fluid lg>
				<SearchBar handleSearch={this.props.fetchShowList} />
				<div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
					{ this._renderShows() }
				</div>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		shows: state.show.shows,
		favorites: state.show.favoriteShows
	};
}

export default connect(mapStateToProps, { addFavoriteShow, fetchShowList, removeFavoriteShow })(ShowList);
