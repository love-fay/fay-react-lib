import {reqGetBrace, promise, getQueryString} from './request';

export default (path, data, appSn) => {
    return promise(path + getQueryString(data), reqGetBrace('GET', appSn));
};