/**
 * Created by feichongzheng on 17/9/12.
 */
// import * as PropTypes from 'prop-types';
import * as React from 'react';
import { ReactReduxContext } from 'react-redux';
import {injectAsyncStore} from './store';

// interface Props {
//     cache?: boolean,
//     reducer: object,
//     sagas: object,
//     viewProps: object,
//     view: React.ElementType
// }
//
// class Bundle extends React.Component<Props> {
//
//     static propTypes = {
//         cache: PropTypes.bool
//     };
//
//     static contextTypes = {
//         store: PropTypes.object
//     };
//
//     componentWillUnmount() {
//         if(this.props.cache === false)
//         rejectAsyncStore(this.props.reducer);
//     }
//
//     componentWillMount(){
//         const {reducer, sagas} = this.props;
//         injectAsyncStore(this.context.store, reducer, sagas);
//     }
//
//     render () {
//         const {viewProps} = this.props;
//         const View = this.props.view;
//         return <View {...viewProps}/>;
//     }
// }

interface Props {
  reducer: object,
  sagas: object,
  view: React.ComponentState,
  viewProps: Readonly<{}>
}

export default function MyConnectedComponent({reducer, sagas, view, viewProps}: Props) {
		const View = view;
		return (
			<ReactReduxContext.Consumer>
					{({ store }) => {
							injectAsyncStore(store, reducer, sagas);
							return <View {...viewProps}/>
					}}
			</ReactReduxContext.Consumer>
		);
};
