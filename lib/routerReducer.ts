/**
 * Created by feichongzheng on 17/10/23.
 */
import { connectRouter } from 'connected-react-router';
import {createBrowserHistory} from 'history';
const history = createBrowserHistory();

export default {
	router: connectRouter(history),
}
