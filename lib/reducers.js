/**
 * Created by feichongzheng on 17/10/23.
 */
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
const history = createHistory();

export default function createReducer(asyncReducers) {
    const reducers = {
        ...asyncReducers,
        root: () => {return {court: '3.0'}}
    };
    return connectRouter(history)(combineReducers(reducers));
}