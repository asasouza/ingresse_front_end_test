//Modules
import { Container } from 'aphrodite-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import SearchBar from 'components/SearchBar';
import ShowDetails from 'components/ShowDetails';

//Actions
import { addFavoriteShow, fetchShow, removeFavoriteShow } from 'ducks/Show';

class ShowDetail extends Component {
	
	componentDidMount() {
		this.props.fetchShow({ id: this.props.match.params.id });
	}

	render() {
		const { addFavoriteShow, favorites, show, removeFavoriteShow } = this.props;
		if (this.props.requesting || !this.props.show) {
			return <div>Loading...</div>;
		}
		return (
			<Container fluid lg>
				<SearchBar handleSearch={(term) => console.log(term)} />
				<ShowDetails 
					addFavorite={id => addFavoriteShow({ id })} 
					isFavorite={favorites.indexOf(parseInt(show.id)) > -1}
					show={show} 
					removeFavorite={id => removeFavoriteShow({ id })}
				/>
			</Container>
		);
	}
}

function mapStateToProps(state) {
	return {
		error: state.show.error,
		favorites: state.show.favoriteShows,
		requesting: state.show.requesting,
		show: state.show.show,
	};
}

export default connect(mapStateToProps, { addFavoriteShow, fetchShow, removeFavoriteShow })(ShowDetail);
