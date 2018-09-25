import {reqGetBrace, promise, getQueryString, reqPostBrace} from './request';

export default ({path, data, appSn, contentType, defaultQuery = true}) => {
    if(defaultQuery){
        return promise(path + (typeof data === 'object' ? getQueryString(data) : data), reqGetBrace({method: 'PUT', appSn}));
    }
    return promise(path, reqPostBrace({method: 'PUT', params: data, appSn, contentType}));
};