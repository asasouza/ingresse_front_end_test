//Modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Views
import ShowDetail from 'views/ShowDetail';
import ShowList from 'views/ShowList';

const MainRouter = (props) => {
	return (
		<Router>
			<Switch>
				<Route exact path='/' component={ShowList} />
				<Route exact path='/shows' component={ShowList} />
				<Route path='/shows/:id(\d+)' component={ShowDetail} />
				<Route component={() => <div>404!</div>} />
			</Switch>
		</Router>
	);
};

export default MainRouter;
