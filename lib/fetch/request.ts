/**
 * Created by feichongzheng on 17/1/5.
 */
// import {loginUser} from '../../user';

// const authorization = ({appSn}) => {
// 		// const user = loginUser();
// 		const Authorization = {};
// 		// user && (Authorization.token = user.token);
// 		return JSON.stringify(Authorization);
// };

interface Header {
  contentType?: string,
  acceptType?: string,
	auth?: boolean
}

const headers = ({contentType, acceptType='application/json', auth}: Header) => {
	const newHeaders = new Headers();
	contentType && newHeaders.append('Content-Type', 'application/json');
	newHeaders.append('Accept', acceptType);
	auth && newHeaders.append("Authorization", '');
	const pathname = window.location.pathname;
	if(pathname === '/login') {
		newHeaders.append('client_id', 'fjfy');
		newHeaders.append('client_secret', 'secret');
	}
	return newHeaders;
};

export const getQueryString = (params:any) => {
		if(params){
				const arr:string[] = [];
				Object.keys(params).forEach((key: string) => {
						arr.push(key + '=' + encodeURIComponent(params[key]));
				});
				return '?' + arr.join('&');
		}else{
				return '';
		}
};

interface ReqBrace {
  method: string,
  contentType?: string,
  acceptType?: string,
  auth?: boolean,
  params?: any
}

export const reqGetBrace = ({method, contentType, acceptType, auth=true}:ReqBrace) => {
		return {
				method,
				headers: headers({contentType, acceptType, auth}),
				mode: 'cors',
				cache: 'default'
		};
};

export const reqPostBrace = ({method, params = {}, contentType, acceptType, auth=true}:ReqBrace) => {
		return {
				method,
				headers: headers({contentType, acceptType, auth}),
				mode: 'cors',
				cache: 'default',
				body: contentType ? typeof params === 'object' ? JSON.stringify(params) : params : params
		};
};

export const promise = (url:string, options = {}, type?:string) => {
		const req = new Request(url, options);
		return new Promise((resolve, reject) => {
				fetch(req).then((res) => {
						const status = res.status;
						if (status === 401) {
								const pathname = window.location.pathname;
								pathname === '/login' || (window.location.pathname = '/login');
						}
						resolve(type === 'json' ? res.json() : res);
				}).catch((err) => {
						reject(err);
				});
		});
};
