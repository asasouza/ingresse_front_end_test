import { combineReducers } from 'redux';

import Show from 'ducks/Show';

const rootReducer = combineReducers({
	show: Show
});

export default rootReducer;
