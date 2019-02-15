//Modules
import React from 'react';
import { FaGrinBeamSweat } from 'react-icons/fa';
import injectSheet from 'react-jss';
//Components
import Card from 'components/common/Card';

const CardError = props => {
	const { message } = props;
	const { cardError, cardError__message } = props.classes;
	return (
		<Card className={cardError}>
			<FaGrinBeamSweat size={32} color='#333' />
			<p className={cardError__message}>
				{message}
			</p>
		</Card>
	);
};

const styles = {
	cardError: {
		textAlign: 'center',
		width: '100%',
		padding: '40px 0',
		marginTop: '150px',
	},
	cardError__message: {
		fontSize: '20px',
		fontWeight: '300'
	}
};

export default injectSheet(styles)(CardError);
