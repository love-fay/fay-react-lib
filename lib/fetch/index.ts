import get from './get';
import getJson from './getJson';
import post from './post';
import postJson from './postJson';
import put from './put';
import putJson from './putJson';
import remove from './remove';
import removeJson from './removeJson';

declare global {
	interface Window {
		fetchInterceptor: (res: any, type?: string) => Promise<any>
	}
}

export {
	remove, post, get, put,
	removeJson, postJson, getJson, putJson
}

export const fetchInterceptor = (interceptor: (res: any, type?: string) => Promise<any>) => {
	window.fetchInterceptor = interceptor;
};
