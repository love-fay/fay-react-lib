import {reqPostBrace, promise} from './request';

export default (path, data, appSn, defaultJson, auth) => {
    return promise(path, reqPostBrace('POST', data, appSn, defaultJson, undefined, auth));
};