import React from 'react';
import Loadable  from '../../../lib/loadable';

export default (props) => <Loadable loader={{view: () => import(/* webpackChunkName: "test-test2" */'./views/test')}} props={props}/>

// export default (props) => Loadable({
//     loader: {
//         view: () => import(/* webpackChunkName: "test-test2" */'./views/test')
//     },
//     props: props
// })

