//Modules
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

const Card = props => {
	const { children, image, imageLink, title } = props;
	const { card, card__body, card__image, card__title } = props.classes;
	return (
		<div className={card}>
			{ image && <Link to={imageLink}><img src={image} className={card__image} role='presentation' /></Link>}

			<div className={card__body}>
			{ title && <p className={card__title}>{title}</p> }
				{ children }
			</div>
		</div>
	);
};

Card.propTypes = {
	children: PropTypes.node,
	image: PropTypes.string,
	title: PropTypes.string,
};

const styles = {
	card: {
		border: '1px solid #ccc', 
		borderRadius: '3px', 
		boxShadow: '1px 1px #f5f5f5',
	},
	card__body: {
		padding: '10px',
	},
	card__image: {
		cursor: 'pointer',
		filter: 'saturate(90%)',
		width: '100%',
		'&:hover': {
			filter: 'saturate(120%)'
		}
	},
	card__title: {
		fontSize: '20px', 
		fontWeight: '700', 
		marginTop: '0'
	},

};

export default injectSheet(styles)(Card);
