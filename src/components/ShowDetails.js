//Modules
import PropTypes from 'prop-types';
import { Badge } from 'aphrodite-react';
import React from 'react';
import injectSheet from 'react-jss';
//Components
import Card from 'components/common/Card';
import FavoriteButton from 'components/common/FavoriteButton';


const ShowDetails = props => {
	const { addFavorite, isFavorite, removeFavorite } = props;
	const { genres, id, image, name, premiered, summary } = props.show;
	const poster = image ? image.original : `https://via.placeholder.com/1200x1000.png?text=${name}`;
	const { showDetails, showDetails__genre, showDetails__infoContainer, showDetails__name, showDetails__poster, showDetails__posterContainer, showDetails__premiere, showDetails__sumary } = props.classes;
	return (
		<div className={showDetails}>

			<div className={showDetails__posterContainer}>
				<FavoriteButton addFavorite={() => addFavorite(id)} removeFavorite={() => removeFavorite(id)} isFavorite={isFavorite} />

				<img src={poster} role='presentation' className={showDetails__poster} />
			</div>

			<div className={showDetails__infoContainer}>
				<div>
					<p className={showDetails__name}>{name}</p>

					{
						genres.map((genre, key) => {
							return <Badge key={key} sm className={showDetails__genre}>{genre}</Badge>;
						})
					}
					<p className={showDetails__premiere}>Premiere: {premiered.replace(/-/g, '/')}</p>
				</div>
			
				<div>
					<Card className={showDetails__sumary}>
						
						<div dangerouslySetInnerHTML={{ __html: summary }} />
					</Card>
				</div>
			</div>
		</div>
	);
};

ShowDetails.propTypes = {
	addFavorite: PropTypes.func.isRequired,
	isFavorite: PropTypes.bool.isRequired,
	removeFavorite: PropTypes.func.isRequired,
	show: PropTypes.object.isRequired,
};

const styles = {
	showDetails: {
		display: 'flex', 
		flexDirection: 'row', 
		margin: '50px 0'
	},
	showDetails__genre: {
		margin: '5px !important'
	},
	showDetails__infoContainer: {
		display: 'flex', 
		flexDirection: 'column', 
		padding: '0px 30px'
	},
	showDetails__name: {
		color: '#f5f5f5', 
		fontSize: 40, 
		fontWeight: '700', 
		margin: '10px 0'
	},
	showDetails__poster: {
		borderRadius: '3px', 
		boxShadow: '1.5px 1px rgba(31, 30, 30, 0.5)',
		height: '500px', 
		width: '350px', 
	},
	showDetails__posterContainer: {
		position: 'relative'
	},
	showDetails__premiere: {
		color: '#f5f5f5',
		fontSize: '14px', 
		fontWeight: '300',
		marginLeft: '5px', 
	},
	showDetails__sumary: {
		height: '317px',
		marginTop: '30px',
		overflow: 'overlay',
		padding: '0 20px',
		textAlign: 'justify',
	},
	'@media(min-width: 980px)': {
		showDetails: {
			margin: '50px 10%',
			width: '80%'
		}
	},
	'@media(max-width: 769px)': {
		showDetails: {
			display: 'block'
		},
		showDetails__poster: {
			height: 'auto',
			width: '100%',
		},
		showDetails__posterContainer: {
			margin: 'auto',
			width: '50%',
		},
		showDetails__premiere: {
			fontSize: '18px',
		},
		showDetails__sumary: {
			height: 'auto',
			overflow: 'hidden'
		}
	},
	'@media(max-width: 519px)': {
		showDetails__infoContainer: {
			padding: '0 2.5%'
		},
		showDetails__posterContainer: {
			width: '95%',
		},
	}
};

export default injectSheet(styles)(ShowDetails);
