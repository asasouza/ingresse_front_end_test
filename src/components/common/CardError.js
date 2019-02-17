//Modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinBeamSweat } from '@fortawesome/free-solid-svg-icons/faGrinBeamSweat';
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
//Components
import Card from 'components/common/Card';

const CardError = props => {
	const { message } = props;
	const { cardError, cardError__message } = props.classes;
	return (
		<Card className={cardError}>
			<FontAwesomeIcon icon={faGrinBeamSweat} size='2x' color='#333' />
			<p className={cardError__message}>
				{message}
			</p>
		</Card>
	);
};

CardError.propTypes = {
	message: PropTypes.string.isRequired
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
