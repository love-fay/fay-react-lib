import {promise, reqPostBrace} from './request';

export default ({path, data, contentType, auth}: Args) => {
		return promise(path, reqPostBrace({method: 'POST', params: data, contentType, auth}), 'json');
};
