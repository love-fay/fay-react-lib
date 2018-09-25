/**
 * Created by feichongzheng on 17/10/13.
 */
import React from 'react';
import Loadable  from '../loadable';

export default (props) => <Loadable loader={{
    view: () => import(/* webpackChunkName: "Loading" */'./views'),
    reducer: () => import(/* webpackChunkName: "Loading" */'./reducer')
}} props={props}/>

import withLoading from './views/withLoading';
export {withLoading};