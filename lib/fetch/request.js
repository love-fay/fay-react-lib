/**
 * Created by feichongzheng on 17/1/5.
 */
import {loginUser} from '../user';

const authorization = (appSn) => {
    const user = loginUser();
    let Authorization = {};
    Authorization.appSn = appSn;
    user && (Authorization.token = user.token);
    return JSON.stringify(Authorization);
};

const headers = (appSn, defaultJson, acceptType="application/json", auth) => {
    let headers = new Headers();
    defaultJson && headers.append("Content-Type", "application/json");
    headers.append("Accept", acceptType);
    auth && headers.append("Authorization", authorization(appSn));
    const pathname = window.location.pathname;
    if(pathname === '/login') {
        headers.append("client_id", "fjfy");
        headers.append("client_secret", "secret");
    }
    return headers;
};

export const getQueryString = (params) => {
    if(params){
        let arr = [];
        Object.keys(params).forEach((key) => {
            arr.push(key + '=' + encodeURIComponent(params[key]));
        });
        return '?' + arr.join('&');
    }else{
        return '';
    }
};

export const reqGetBrace = (method, appSn, defaultJson = true, acceptType, auth=true) => {
    return {
        method: method,
        headers: headers(appSn, defaultJson, acceptType, auth),
        mode: 'cors',
        cache: 'default'
    };
};

export const reqPostBrace = (method, params = {}, appSn, defaultJson = true, acceptType, auth=true) => {
    return {
        method: method,
        headers: headers(appSn, defaultJson, acceptType, auth),
        mode: 'cors',
        cache: 'default',
        body: defaultJson ? JSON.stringify(params) : params
    };
};

export const promise = (url, options = {}) => {
    const req = new Request(url, options);
    return new Promise(function (resolve, reject) {
        fetch(req).then((res) => {
            const status = res.status;
            if (status === 401) {
                const pathname = window.location.pathname;
                pathname === '/login' || (window.location.pathname = '/login');
            }
            resolve(res);
        }).catch((err) => {
            console.log(err);
            reject(err);
        });
    });
};