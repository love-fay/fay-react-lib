import { routerMiddleware } from 'connected-react-router'
import {createBrowserHistory} from 'history';

const history = createBrowserHistory();
const rMiddleware = routerMiddleware(history);

export default [rMiddleware];