/**
 * Created by feichongzheng on 17/9/28.
 */
import cookie from 'react-cookie';

const baseOption = {path: '/'};

const loginUser = () => {
    return cookie.load('current-user');
};

const isLogin = () => {
    const user = loginUser();
    return typeof (user) === 'object';
};

const logout = (history, location) => {
    cookie.remove('current-user', baseOption);
    history.push('/login', {from: location});
};

const goToLogin = (history, location) => {
    cookie.remove('current-user');
    history.push('/login', {from: location});
};

const saveUser = (value, rememberTime) => {
    const opt = rememberTime ? {...baseOption, maxAge: rememberTime, expires: new Date(new Date().getTime()+rememberTime*1000)}:baseOption;
    cookie.save('current-user', value, opt);
};

const saveUserLoginInfo = (value, rememberTime) => {
    const baseOption = {path: '/'};
    const opt = rememberTime ? {...baseOption, maxAge: rememberTime, expires: new Date(new Date().getTime()+rememberTime*1000)}:baseOption;
    cookie.save('login-info', value, opt);
};

const removeUserLoginInfo = () => {
    cookie.remove('login-info');
};

const removeUser = () => {
    cookie.remove('current-user');
};

export {loginUser, isLogin, logout, goToLogin, saveUser, removeUser, saveUserLoginInfo, removeUserLoginInfo};