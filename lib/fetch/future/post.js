import {reqPostBrace, promise} from './request';

export default ({path, data, appSn, contentType, auth}) => {
    return promise(path, reqPostBrace({method: 'POST', params: data, appSn, contentType, auth}));
};