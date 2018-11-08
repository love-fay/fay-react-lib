/**
 * Created by feichongzheng on 16/12/18.
 */
// import './polyfill/MutationObserver';
import React from 'react';
import {Provider} from 'react-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter} from 'connected-react-router';
import initStore from './store';
let store = initStore();
const history = createBrowserHistory();
import {Route} from 'react-router-dom';

export default ({root}) => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Route component={root}/>
            </ConnectedRouter>
        </Provider>
    );
}
