//Modules
import { Container } from 'aphrodite-react';
import map from 'lodash/map';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import CardShow from 'components/CardShow';
import CardShowPlaceholder from 'components/CardShowPlaceholder';
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

	_renderPlaceholders() {
		const placeholders = [];
		for (let i = 0; i < 4; i++) {
			placeholders.push(<CardShowPlaceholder key={i} />);
		}
		return placeholders;
	}

	render() {
		const { shows, requesting } = this.props;
		return (
			<Container fluid lg>
				<SearchBar handleSearch={this.props.fetchShowList} />
				<div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
					{ !shows || requesting ? this._renderPlaceholders() : this._renderShows() }
				</div>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		favorites: state.show.favoriteShows,
		requesting: state.show.requesting,
		shows: state.show.shows,
		
	};
}

export default connect(mapStateToProps, { addFavoriteShow, fetchShowList, removeFavoriteShow })(ShowList);
