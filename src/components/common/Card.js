//Modules
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

const Card = props => {
	const { children, className, image, imageLink, title } = props;
	const { card, card__body, card__image, card__title } = props.classes;
	return (
		<div className={`${card} ${className}`}>
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
		backgroundColor: '#f9f9f9',
		border: '1px solid #3c3939', 
		borderRadius: '3px', 
		boxShadow: '1.5px 1px rgba(31, 30, 30, 0.5)',
	},
	card__body: {
		padding: '10px',
	},
	card__image: {
		borderRadius: '3px 3px 0 0',
		cursor: 'pointer',
		filter: 'saturate(90%)',
		height: '360px',
		width: '100%',
		'&:hover': {
			filter: 'saturate(120%)'
		}
	},
	card__title: {
		fontSize: '20px', 
		fontWeight: '700', 
		minHeight: '54px',
		marginTop: '0'
	},

};

export default injectSheet(styles)(Card);
