//Modules
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//Components
import CardError from 'components/common/CardError';
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
				<Route component={() => <CardError message='Error 404! Page not found, sorry.' />} />
			</Switch>
		</Router>
	);
};

export default MainRouter;
