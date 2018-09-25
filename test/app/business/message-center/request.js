/**
 * Created by Administrator on 2018/4/28.
 */
import get from 'rj-lib/fetch/get';
import post from 'rj-lib/fetch/post';
import del from 'rj-lib/fetch/delete';
import {serviceUrl} from 'court-message-center/config'


function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}

export default (method, path, params, appSn) => {
    let fetchPromise;
    if (method === "post") {
        fetchPromise = post(serviceUrl + path, params, appSn);
    } else if (method === "delete") {
        fetchPromise = del(serviceUrl + path, params, appSn);
    } else {
        fetchPromise = get(serviceUrl + path, params, appSn);
    }
    return fetchPromise.then(checkStatus).then(res => res.json()).then(data => data);
}
