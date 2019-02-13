//Modules
import mapKeys from 'lodash/mapKeys';
//Providers
import RequestProvider from 'providers/RequestProvider';
//Endpoints
import { LOOKUP_SHOW, SEARCH_SHOWS } from 'constants/APIEndpoints';
//Types
export const SHOWS_FETCH_FAILED = 'shows_fetch_failed';
export const SHOWS_FETCH_SUCCESS = 'shows_fetch_success';
export const SHOWS_REQUESTING = 'shows_requesting';


//Reducer
const INITIAL_STATE = {
	error: null,
	requesting: false,
	shows: [],
};
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SHOWS_FETCH_FAILED:
			return { ...INITIAL_STATE, error: action.payload };

		case SHOWS_FETCH_SUCCESS:
			return { ...INITIAL_STATE, shows: action.payload };

		case SHOWS_REQUESTING:
			return { ...state, requesting: true };

		default:
			return state;
	}
};

//Actions
export const fetchShowList = (data, callbacks) => {
	return dispatch => {
		dispatch({
			type: SHOWS_REQUESTING
		});
		RequestProvider.get(`${SEARCH_SHOWS}?q=game`)
		.then(response => {
			const shows = mapKeys(response, (value) => {
				return value.show.id;
			});
			dispatch({
				type: SHOWS_FETCH_SUCCESS,
				payload: shows
			});
		})
		.catch(err => {
			console.log(err);
		});
	};
};

export const fetchShow = (data, callbacks) => {
	return dispatch => {
		dispatch({
			type: SHOWS_REQUESTING
		});
		RequestProvider.get(`${LOOKUP_SHOW}?tvrage=24493`)
		.then(response => {
			console.log(response);
		})
		.catch(err => {
			console.log(err);
		});
	};
};
