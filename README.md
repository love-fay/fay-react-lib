# rj lib
####榕基库

法院内网源：npm set config registry=http://205.0.0.19:7001
> 发布：首先需要保持npm在http://205.0.0.19:7005中的登录状态(rj/rj123456)，然后执行npm run pub

`npm i rj-lib`

# 异步请求(future)
### defaultQuery默认为true
```javascript
import {get, put, post, remove, download} from 'rj-lib/fetch';
get({path, data, appSn});
put({path, data, appSn, contentType, defaultQuery});
post({path, data, appSn, contentType});
remove({path, data, appSn, contentType});
download({path, data, appSn, contentType, acceptType, filename, callback});
```

# 异步请求
### defaultJson、defaultQuery默认为true
```javascript
import get from 'rj-lib/fetch/get';
get(path, data, appSn);

import put from 'rj-lib/fetch/put';
put(path, data, appSn, defaultJson, defaultQuery);

import post from 'rj-lib/fetch/post';
post(path, data, appSn, defaultJson);

import remove from 'rj-lib/fetch/remove';
remove(path, data, appSn, defaultJson);

import download from 'rj-lib/fetch/download';
download(path, data, appSn, defaultJson, acceptType, filename, callback);
```

# 按需加载
```javascript
import Loadable  from 'rj-lib/loadable';

export default (props) => Loadable({
    view: () => import(/* webpackChunkName: "test" */'./views')
},props)
```
```javascript
import Loadable  from 'rj-lib/loadable';

export default (props) => Loadable({
    view: () => import(/* webpackChunkName: "test" */'./views'),
    reducer: () => import(/* webpackChunkName: "testReducer" */'./reducer')
},props)
```
```javascript
import Loadable  from 'rj-lib/loadable';

export default (props) => Loadable({
    view: () => import(/* webpackChunkName: "test" */'./views'),
    reducer: () => import(/* webpackChunkName: "testReducer" */'./reducer'),
    sagas: () => import(/* webpackChunkName: "testSagas" */'./sagas')
},props)
```
```javascript
//reducer.js
import * as types from './actionType';
import reducerName from './reducerName'

const initState = {};

const reducer = (state = initState,action) => {
    const {type} = action;
    switch (type) {
        case types.INIT: {
            return {type}
        }
        default: {
            return state;
        }
    }
};

export default {
    [reducerName]: reducer
}
```

# redux
```javascript
import {Provider} from 'react-redux';
import initStore from 'rj-lib/store'
let store = initStore();

<Provider store={store}>
    ...
</Provider>
```

# 用户
```javascript
import 
	{
		loginUser, isLogin,
		logout, goToLogin,
		saveUser, removeUser
	}
from 'rj-lib/user';
```
> loginUser()返回登录用户信息
>
> isLogin()返回是否登录
>
> logout(history, pathname)退出登录并跳转至'/login'页面
>
> goToLogin同logout
>
> saveUser(value, rememberTime)保存用户信息到cookie中
>
> removeUser()删除cookie中的用户信息

# location
### search(以JSON格式存入)
```javascript
import {add, get} from 'rj-lib/location/search';

add(location, data, remember=true);在location对象中加入search，如果remember为false，则search是一个全新的对象，为true时，则在原基础上添加
get(location);获取search中的对象，如果没有返回null

```

# hash
### hash(以JSON格式存入, {pathname, search, hash})
```javascript
import {encodeHash, decodeHash} from 'rj-lib/location/hash';

encodeHash({pathname, search, hash});在hash对象中加入location的概念
decodeHash(hash);获取hash中的对象，如果没有返回{}

```

# loading
### 全局的加载遮罩
```javascript
import {withLoading} from 'rj-lib/loading';

withLoading(App);

this.props.loading.show(tip);//tip:描述，默认为‘加载中......’
this.props.loading.hide();

```
