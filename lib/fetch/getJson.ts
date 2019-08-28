import {getQueryString, promise, reqGetBrace} from './request';


export default ({path, data}: Args) => {
		return promise(path + (typeof data === 'object' ? getQueryString(data) : data || ''), reqGetBrace({method: 'GET'}), 'json');
};
