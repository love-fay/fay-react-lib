import {promise, reqPostBrace} from "./request";

export default ({path, data, appSn, contentType}) => {
    return promise(path, reqPostBrace({method: 'DELETE', params: data, appSn, contentType}));
};