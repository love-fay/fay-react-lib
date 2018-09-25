import Loadable  from '../../../lib/loadable';
import React from 'react';

export default (props) => <Loadable loader={{
    view:() => import(/* webpackChunkName: "test2" */'./views'),
    reducer: () => import(/* webpackChunkName: "test2Reducer" */'./reducer')
}} props={props}/>



