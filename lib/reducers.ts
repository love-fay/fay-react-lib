/**
 * Created by feichongzheng on 17/10/23.
 */
import { connectRouter } from 'connected-react-router';
import {createBrowserHistory} from 'history';
import { combineReducers } from 'redux';
const history = createBrowserHistory();

export default function createReducer(asyncReducers:object|null=null) {
		const reducers = {
				router: connectRouter(history),
				...asyncReducers,
				root: () =>({court: '3.0'})
		};
		return combineReducers(reducers);
}
