//Modules
import { Badge } from 'aphrodite-react';
import React from 'react';
import injectSheet from 'react-jss';
//Components
import Card from 'components/common/Card';
import FavoriteButton from 'components/common/FavoriteButton';

const CardShow = props => {
	const { addFavorite, isFavorite, removeFavorite } = props;
	const { genres, id, image, name } = props.show.show;
	const poster = image ? image.original : `https://via.placeholder.com/1200x1000.png?text=${name}`;
	const { cardShow, cardShow_genre, cardShow__genresContainer } = props.classes;

	return (
		<div className={cardShow}>

			<FavoriteButton addFavorite={() => addFavorite(id)} removeFavorite={() => removeFavorite(id)} isFavorite={isFavorite} />

			<Card title={name} image={poster} imageLink={`/shows/${id}`}>
				<div className={cardShow__genresContainer}>
					{genres.map((genre, key) => {
						return <Badge className={cardShow_genre} sm key={key}>{genre}</Badge>;
					})}
				</div>
			</Card>
		</div>
	);
};

const styles = {
	cardShow: {
		borderRadius: '8px',
		display: 'inline-grid',
		margin: '1%',
		position: 'relative',
		width: '49%', 
	},
	cardShow__genresContainer: {
		minHeight: '45px'
	},
	cardShow_genre: {
		margin: '2px !important',
	},
	'@media(min-width: 980px)': {
		cardShow: {
			width: '22%',
			margin: '1.5%',
		}
	},
	'@media(min-width: 820px) and (max-width: 979px)': {
		cardShow: {
			width: '30%',
			margin: '1.5%',
		}
	},
	'@media(min-width: 520px) and (max-width: 819px)': {
		cardShow: {
			width: '49%',
			margin: '0.5%',
		}
	},
	'@media(max-width: 519px)': {
		cardShow: {
			width: '98%',
			margin: '1%'
		}
	},
};

export default injectSheet(styles)(CardShow);
