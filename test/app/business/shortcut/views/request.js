/**
 * Created by Administrator on 2018/4/28.
 */
import get from 'rj-lib/fetch/get';
import post from 'rj-lib/fetch/post';
import del from 'rj-lib/fetch/delete';

const serverUrl = 'http://205.0.0.15:3000/mock/12';

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
        fetchPromise = post(serverUrl + path, params, appSn);
    } else if (method === "delete") {
        fetchPromise = del(serverUrl + path, params, appSn);
    } else {
        fetchPromise = get(serverUrl + path, params, appSn);
    }
    return fetchPromise.then(checkStatus).then(res => res.json()).then(data => data);
}
