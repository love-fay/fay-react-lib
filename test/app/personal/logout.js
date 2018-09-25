import {uumsServer} from "rjd/res/business/login/api/apiServer";
import {logout, loginUser} from '../../../lib/user';

export const userLogout = (history, location) => {
    const user = loginUser();
    fetch(uumsServer + '/logout?access_token=' + user.token, {mode: 'no-cors'});
    logout(history, location);
};