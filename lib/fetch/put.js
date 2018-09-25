import {reqGetBrace, promise, getQueryString, reqPostBrace} from './request';

export default (path, data, appSn, defaultJson, defaultQuery = true) => {
    if(defaultQuery){
        return promise(path + getQueryString(data), reqGetBrace('PUT', appSn));
    }
    return promise(path, reqPostBrace('PUT', data, appSn, defaultJson));
};