//Modules
import { Container } from 'aphrodite-react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
//Components
import CardError from 'components/common/CardError';
import ShowDetails from 'components/ShowDetails';
import ShowDetailsPlaceholder from 'components/ShowDetailsPlaceholder';

//Actions
import { addFavoriteShow, fetchShow, removeFavoriteShow } from 'ducks/Show';

class ShowDetail extends Component {
	
	componentDidMount() {
		this.props.fetchShow({ id: this.props.match.params.id });
		window.scrollTo(0, 0);
	}

	render() {
		const { addFavoriteShow, error, favorites, requesting, show, removeFavoriteShow } = this.props;

		if (error) {
			return (
				<Container fluid lg>
					<CardError message={'Sorry, we couldn\'t find the show that you are looking for.'} />
				</Container>
			);
		}

		return (
			<Container fluid lg>
				{
					requesting || !show ? <ShowDetailsPlaceholder /> 
					:
					<ShowDetails 
						addFavorite={id => addFavoriteShow({ id })} 
						isFavorite={favorites.indexOf(parseInt(show.id)) > -1}
						show={show} 
						removeFavorite={id => removeFavoriteShow({ id })}
					/>	
				}
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
