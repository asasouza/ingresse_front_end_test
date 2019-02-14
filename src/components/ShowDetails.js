//Modules
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
	return (
		<div style={{ display: 'flex', flexDirection: 'row' }}>
			
			<div style={{ position: 'relative' }}>
				<FavoriteButton addFavorite={() => addFavorite(id)} removeFavorite={() => removeFavorite(id)} isFavorite={isFavorite} />

				<img src={poster} role='presentation' style={{ width: '300px', height: '430px' }} />
			</div>

			<div style={{ display: 'flex', flexDirection: 'column', padding: '0px 30px', justifyContent: 'space-between' }}>
				<div>
					<p style={{ fontSize: 40, fontWeight: '700', color: '#f5f5f5', margin: '10px 0' }}>{name}</p>

					{
						genres.map((genre, key) => {
							return <Badge key={key} sm style={{margin: 5}}>{genre}</Badge>;
						})
					}
					<p style={{fontSize: '14px', color: '#f5f5f5'}}>Lançamento: {premiered}</p>
				</div>
			
				<div>
					<Card>
						<div dangerouslySetInnerHTML={{ __html: summary }} />
					</Card>
				</div>
			</div>
		</div>
	);
};

const styles = {

};

export default injectSheet(styles)(ShowDetails);
