/**
 * Created by feichongzheng on 17/10/13.
 */
import * as React from 'react';
import Loadable from '../../lib/loadable';

export default Loadable({
    view: import(/* webpackChunkName: "FayReactMaterialUiHome" */'./views')
});
