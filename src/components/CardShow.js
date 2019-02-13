//Modules
import { Badge } from 'aphrodite-react';
import React from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import injectSheet from 'react-jss';
//Components
import Card from 'components/common/Card';

const CardShow = props => {
	const { genres, name, image } = props.show.show;
	const poster = image ? image.medium : '';
	const { cardShow__container } = props.classes;

	return (
		<div className={cardShow__container}>

			{ _renderFavoriteButton(props) }

			<Card title={name} image={poster}>
				<div>
					{genres.map((genre, key) => {
						return <Badge sm key={key}>{genre}</Badge>;
					})}
				</div>
			</Card>
		</div>
	);
};

const _renderFavoriteButton = props => {
	const { addFavorite, isFavorite, removeFavorite } = props;
	const { id } = props.show.show;
	const { cardShow__icon, cardShow__iconContainer } = props.classes;
	if (isFavorite) {
		return (
			<div className={cardShow__iconContainer}>
				<FaStar size={15} onClick={() => removeFavorite(id)} className={cardShow__icon}/>
			</div>
		);
	}
	return (
		<div className={cardShow__iconContainer}>
			<FaRegStar size={15} onClick={() => addFavorite(id)} className={cardShow__icon}/>
		</div>
	);
};

const styles = {
	cardShow__container: {
		display: 'inline-grid',
		margin: '1%',
		position: 'relative',
		width: '30%', 
	},
	cardShow__iconContainer: {
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		borderRadius: '3px',
		padding: 1,
		position: 'absolute',
		right: '10px',
		top: '10px',
		zIndex: 1,
	},
	cardShow__icon: {
		color: '#f9f79a'
	},
	'@media(min-width: 980px)': {
		cardShow__container: {
			width: '15%',
		}
	},
	'@media(min-width: 820px) and (max-width: 979px)': {

	},
	'@media(min-width: 660px) and (max-width: 819px)': {

	},
	'@media(max-width: 659px)': {

	},
};

export default injectSheet(styles)(CardShow);
