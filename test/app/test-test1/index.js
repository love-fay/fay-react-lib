import Loadable  from '../../../lib/loadable';
import React from 'react';
// export default (props) => Loadable({
//     loader:{
//         view: () => import(/* webpackChunkName: "test" */'./views/test')
//     },
//     props: props
// })
export default (props) => <Loadable loader={{view:() => import(/* webpackChunkName: "test" */'./views/test')}} props={props}/>
//     loader:{
//         view: () => import(/* webpackChunkName: "test" */'./views/test')
//     },
//     props: props
// })



