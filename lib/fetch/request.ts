/**
 * Created by feichongzheng on 17/1/5.
 */
import {loginUser} from '../user';

const authorization = () => {
		const user = loginUser();
		const Authorization = {token: user ? user.token:''};
		return JSON.stringify(Authorization);
};

interface Header {
  contentType?: string,
  acceptType?: string,
	auth?: boolean
}

const headers = ({contentType, acceptType='application/json', auth}: Header) => {
	const newHeaders = new Headers();
	contentType && newHeaders.append('Content-Type', contentType);
	newHeaders.append('Accept', acceptType);
	auth && newHeaders.append("Authorization", authorization());
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
  params?: any,
	cache?: string
}

export const reqGetBrace = ({method, contentType, acceptType, auth=true, cache='default'}:ReqBrace) => {
	return {
		method,
		headers: headers({contentType, acceptType, auth}),
		mode: 'cors',
		cache
	};
};

export const reqPostBrace = ({method, params = {}, contentType='application/json', acceptType, auth=true}:ReqBrace) => {
		return {
				method,
				headers: headers({contentType, acceptType, auth}),
				mode: 'cors',
				cache: 'default',
				body: contentType === 'application/json' ? typeof params === 'object' ? JSON.stringify(params) : params : params
		};
};

export const promise = (url:string, options = {}, type?:string) => {
		// const req = new Request(url, options);
		return new Promise<any>((resolve, reject) => {
				fetch(url, options).then((res) => {
						const status = res.status;
						if (status === 401) {
								const pathname = window.location.pathname;
								pathname === '/login' || (window.location.href = '/login?redirectUrl='+window.location.href);
						}
						resolve(type === 'json' ? res.json() : res);
				}).catch((err) => {
						reject(err);
				});
		});
};
