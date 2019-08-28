import {promise, reqPostBrace} from './request';

export default ({path, data, contentType}: Args) => {
		return promise(path, reqPostBrace({method: 'DELETE', params: data, contentType}));
};
