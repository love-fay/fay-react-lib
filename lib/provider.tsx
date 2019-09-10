/**
 * Created by feichongzheng on 16/12/18.
 */
import { ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import * as React from 'react';
const history = createBrowserHistory();
import {Provider} from '@fay-react/react-redux-loadable';
import {Route, RouteComponentProps} from 'react-router-dom';
import reduxMiddlewares from './reduxMiddlewares';
import routerReducer from './routerReducer';

interface Props {
	root: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>
}

export default ({root}: Props) => {
	return (
		<Provider initReducer={routerReducer} reduxMiddlewares={reduxMiddlewares}>
			<ConnectedRouter history={history}>
				<Route component={root}/>
			</ConnectedRouter>
		</Provider>
	);
}
