/**
 * Created by feichongzheng on 17/1/5.
 */
import {getPublicPathWithoutStartAndEndForwardSlash} from '../publicPath';
import {getUser} from '../user';

const authorization = () => {
	const user = getUser();
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

export const reqGetBrace = ({method, contentType, acceptType, auth=true, cache='no-cache'}:ReqBrace) => {
	return {
		method,
		headers: headers({contentType, acceptType, auth}),
		credentials: 'same-origin',
		mode: 'cors',
		cache
	};
};

export const reqPostBrace = ({method, params = {}, contentType='application/json', acceptType, auth=true}:ReqBrace) => {
	return {
		method,
		headers: headers({contentType, acceptType, auth}),
		credentials: 'same-origin',
		mode: 'cors',
		cache: 'no-cache',
		body: contentType === 'application/json' ? typeof params === 'object' ? JSON.stringify(params) : params : params
	};
};

export interface CustomPromise extends Promise<any>{
	abort: Function
}

export const promise = (url:string, options = {}, type?:string) => {
  let controller: AbortController | undefined;
  let signal: AbortSignal|undefined = undefined;
  try {
    controller = new AbortController();
    signal = controller.signal;
  } catch (error) {
    controller = undefined;
  }
	const _promise: any = new Promise<any>((resolve, reject) => {
		fetch(url, {...options, signal}).then((res) => {
			const status = res.status;
			if(res.ok){
				if(window.fetchInterceptor){
					window.fetchInterceptor(res, type).then((fetchInterceptorRes) => {
						resolve(fetchInterceptorRes);
					});
				}else{
					resolve(type === 'json' ? res.json() : res);
				}
			}else{
				if (status === 401 || status === 403) {
					const publicPath = getPublicPathWithoutStartAndEndForwardSlash();
					const scope = publicPath ? '/' + publicPath : '';
					const pathname = window.location.pathname;
					pathname === scope + '/login' || (window.location.href = scope + '/login?redirectUrl=' + encodeURIComponent(window.location.href));
				} else{
					resolve(type === 'json' ? {status} : res);
				}
			}
		}).catch((err) => {
			reject(err);
		});
	});
	_promise.abort = () => {
    if(controller){
      controller.abort();
    }else{
      console.error('can not support AbortController');
    }
	};
	const customPromise: CustomPromise = _promise;
	return customPromise;
};
