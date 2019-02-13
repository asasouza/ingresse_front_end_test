//Modules
import React from 'react';
import injectSheet from 'react-jss';
//Components
import Card from 'components/common/Card';

const CardShow = props => {
	const { genres, name, image: { medium: poster }, externals: { tvrage } } = props.show.show;
	return (
		<div style={{ width: '30%' }}>
			<Card title={name} image={poster}>
				<div>
					{genres}
				</div>
			</Card>
		</div>
	);
};

const styles = {

};

export default injectSheet(styles)(CardShow);
