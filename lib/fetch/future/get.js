import {reqGetBrace, promise, getQueryString} from './request';

export default ({path, data, appSn}) => {
    return promise(path + (typeof data === 'object' ? getQueryString(data) : data), reqGetBrace({method: 'GET', appSn}));
};