//Modules
import Container from 'aphrodite-react/dist/components/Grid/Container';
import map from 'lodash/map';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import CardError from 'components/common/CardError';
import CardShow from 'components/CardShow';
import CardShowPlaceholder from 'components/CardShowPlaceholder';
import SearchBar from 'components/SearchBar';
//Actions
import { addFavoriteShow, fetchShowList, removeFavoriteShow } from 'ducks/Show';

class ShowList extends Component {
	
	componentDidMount() {
		const searchTerm = this.props.location.search.replace('?q=', '');
		this.props.fetchShowList({ term: searchTerm || 'game' });
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
		const { error, requesting, shows } = this.props;
		return (
			<Container fluid lg>
				<SearchBar handleSearch={this.props.fetchShowList} />
				<div style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
					{ error && <CardError message={'Sorry, we couldn\'t find the shows that you are looking for. Try another search term.'} /> }
					{ !shows || requesting ? this._renderPlaceholders() : this._renderShows() }
				</div>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		error: state.show.error,
		favorites: state.show.favoriteShows,
		requesting: state.show.requesting,
		shows: state.show.shows,
		
	};
}

export default connect(mapStateToProps, { addFavoriteShow, fetchShowList, removeFavoriteShow })(ShowList);
