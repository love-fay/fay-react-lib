# fay react lib
####工具库

# Usage
`npm i @fay-react/lib`

# 异步请求(fetch)
### defaultQuery默认为true
```javascript
import {get, put, post, remove, getJson, putJson, postJson, removeJson} from '@fay-react/lib/fetch';
get({path, data});
put({path, data, contentType, defaultQuery});
post({path, data, contentType});
remove({path, data, contentType});
```
* getJson, putJson, postJson, removeJson对应get,put,post,remove的返回值转成JSON对象

# 按需加载(code splitting)

```javascript
import Loadable  from '@fay-react/lib/loadable';

export default (props) => Loadable({
    view: () => import(/* webpackChunkName: "test" */'./views'),
    reducer: () => import(/* webpackChunkName: "testReducer" */'./reducer'),
    sagas: () => import(/* webpackChunkName: "testSagas" */'./sagas')
},props)
```

* reducer和sagas为可选项，非必传

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

# Provider
```javascript
import React from 'react';
import {render} from 'react-dom';
import Root from './root';
import Provider from '@fay-react/lib/provider';

render(<Provider root={Root}/>, document.getElementById('app'));
```