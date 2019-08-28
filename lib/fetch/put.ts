import {getQueryString, promise, reqGetBrace, reqPostBrace} from './request';

export default ({path, data, contentType, defaultQuery = true}: Args) => {
		if(defaultQuery){
				return promise(path + (typeof data === 'object' ? getQueryString(data) : data), reqGetBrace({method: 'PUT'}));
		}
		return promise(path, reqPostBrace({method: 'PUT', params: data, contentType}));
};
