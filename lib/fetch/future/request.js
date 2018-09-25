/**
 * Created by feichongzheng on 17/1/5.
 */
import {loginUser} from '../../user';

const authorization = ({appSn}) => {
    const user = loginUser();
    let Authorization = {};
    Authorization.appSn = appSn;
    user && (Authorization.token = user.token);
    return JSON.stringify(Authorization);
};

const headers = ({appSn, contentType, acceptType="application/json", auth}) => {
    let headers = new Headers();
    contentType && headers.append("Content-Type", "application/json");
    headers.append("Accept", acceptType);
    auth && headers.append("Authorization", authorization({appSn}));
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

export const reqGetBrace = ({method, appSn, contentType, acceptType, auth=true}) => {
    return {
        method: method,
        headers: headers({appSn, contentType, acceptType, auth}),
        mode: 'cors',
        cache: 'default'
    };
};

export const reqPostBrace = ({method, params = {}, appSn, contentType, acceptType, auth=true}) => {
    return {
        method: method,
        headers: headers({appSn, contentType, acceptType, auth}),
        mode: 'cors',
        cache: 'default',
        body: contentType ? typeof params === 'object' ? JSON.stringify(params) : params : params
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