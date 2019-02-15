//Modules
import { Placeholder } from 'aphrodite-react';
import React from 'react';
import injectSheet from 'react-jss';

import Card from 'components/common/Card';

const ShowDetailsPlaceholder = props => {
	const { showDetailsPlaceholder, showDetailsPlaceholder__genre, showDetailsPlaceholder__infoContainer, showDetailsPlaceholder__name, showDetailsPlaceholder__poster, showDetailsPlaceholder__posterContainer, showDetailsPlaceholder__premiere, showDetailsPlaceholder__sumary } = props.classes;
	return (
		<div className={showDetailsPlaceholder}>

			<div className={showDetailsPlaceholder__posterContainer}>

				<Placeholder className={showDetailsPlaceholder__poster} />
			</div>

			<div className={showDetailsPlaceholder__infoContainer}>
				<div>
					<Placeholder className={showDetailsPlaceholder__name} />

					<Placeholder className={showDetailsPlaceholder__genre} />
					
					<Placeholder className={showDetailsPlaceholder__premiere} />
				</div>
			
				<div>
					<Card className={showDetailsPlaceholder__sumary}>
						<Placeholder style={{ height: '292px' }} />
					</Card>
				</div>
			</div>
		</div>
	);
};

const styles = {
	showDetailsPlaceholder: {
		display: 'flex', 
		flexDirection: 'row', 
		margin: '50px 0'
	},
	showDetailsPlaceholder__genre: {
		margin: '5px 0',
	},
	showDetailsPlaceholder__infoContainer: {
		display: 'flex', 
		flexDirection: 'column', 
		padding: '0px 30px',
		width: '100%',
	},
	showDetailsPlaceholder__name: {
		margin: '10px 0',
		height: '40px'

	},
	showDetailsPlaceholder__poster: {
		borderRadius: '3px', 
		boxShadow: '1.5px 1px rgba(31, 30, 30, 0.5)',
		height: '500px', 
		width: '350px', 
	},
	showDetailsPlaceholder__posterContainer: {
		position: 'relative'
	},
	showDetailsPlaceholder__premiere: {
		height: '30px',
		margin: '10px 0'
	},
	showDetailsPlaceholder__sumary: {
		height: '317px',
		marginTop: '30px',
		padding: '0 20px',
	},
	'@media(min-width: 980px)': {
		showDetailsPlaceholder: {
			margin: '50px 10%',
			width: '80%'
		}
	},
	'@media(max-width: 769px)': {
		showDetailsPlaceholder: {
			display: 'block',
			width: 'auto',
		},
		showDetailsPlaceholder__poster: {
			height: '100%',
			width: '100%',
		},
		showDetailsPlaceholder__posterContainer: {
			margin: 'auto',
			width: '50%',
			height: '350px'
		},
		showDetailsPlaceholder__infoContainer: {
			width: 'auto',
		}
	},
	'@media(max-width: 519px)': {
		showDetailsPlaceholder__infoContainer: {
			padding: '0 2.5%'
		},
		showDetailsPlaceholder__posterContainer: {
			width: '95%',
		},
	}
};

export default injectSheet(styles)(ShowDetailsPlaceholder);
