import {promise, reqPostBrace} from "./request";

export default (path, data, appSn, defaultJson) => {
    return promise(path, reqPostBrace('DELETE', data, appSn, defaultJson));
};