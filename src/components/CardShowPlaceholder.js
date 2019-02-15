import { Placeholder } from 'aphrodite-react';
import React from 'react';
import injectSheet from 'react-jss';

const CardShowPlaceholder = props => {
	const { cardShowPlaceholder } = props.classes;
	return (
		<div className={cardShowPlaceholder}>
			<Placeholder style={{ height: '360px', borderRadius: '3px 3px 0 0' }} />
			<div style={{marginBottom: 5, marginTop: 10}}>
				<Placeholder style={{ borderRadius: 0, height: '54px' }} />
			</div>
			<div>
			<Placeholder style={{ borderRadius: 0, height: '45px', padding: '10px' }} />
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
