import Placeholder from 'aphrodite-react/dist/components/Placeholder/Placeholder';
import React from 'react';
import injectSheet from 'react-jss';

const CardShowPlaceholder = props => {
	const { cardShowPlaceholder, cardShowPlaceholder__gender, cardShowPlaceholder__name, cardShowPlaceholder__poster } = props.classes;
	return (
		<div className={cardShowPlaceholder}>
			<Placeholder className={cardShowPlaceholder__poster} />
			<div style={{ marginBottom: 5, marginTop: 10 }}>
				<Placeholder className={cardShowPlaceholder__name} />
			</div>
			<div>
			<Placeholder className={cardShowPlaceholder__gender} />
			</div>
			
		</div>
	);
};

const styles = {
	cardShowPlaceholder: {
		backgroundColor: '#f9f9f9',
		borderRadius: '3px', 
		boxShadow: '1.5px 1px rgba(31, 30, 30, 0.5)',
		display: 'inline-grid',
		margin: '1%',
		position: 'relative',
		width: '49%',
	},
	cardShowPlaceholder__gender: {
		borderRadius: 0, 
		height: '45px', 
		padding: '10px'
	},
	cardShowPlaceholder__name: {
		borderRadius: 0, 
		height: '54px'
	},
	cardShowPlaceholder__poster: {
		borderRadius: '3px 3px 0 0',
		height: '360px', 
	},
	'@media(min-width: 980px)': {
		cardShowPlaceholder: {
			width: '22%',
			margin: '1.5%',
		}
	},
	'@media(min-width: 820px) and (max-width: 979px)': {
		cardShowPlaceholder: {
			width: '30%',
			margin: '1.5%',
		}
	},
	'@media(min-width: 520px) and (max-width: 819px)': {
		cardShowPlaceholder: {
			width: '49%',
			margin: '0.5%',
		}
	},
	'@media(max-width: 519px)': {
		cardShowPlaceholder: {
			width: '98%',
			margin: '1%'
		}
	},
};	

export default injectSheet(styles)(CardShowPlaceholder);
