/**
 * Created by feichongzheng on 16/12/18.
 */
import { ConnectedRouter} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import * as React from 'react';
import {Provider} from 'react-redux';
import initStore from './store';
const store = initStore();
const history = createBrowserHistory();
import {Route} from 'react-router-dom';

interface Props {
	root: React.FunctionComponent
}

export default ({root}: Props) => {
	return (
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Route component={root}/>
			</ConnectedRouter>
		</Provider>
	);
}
