import * as React from 'react';
import * as Loadable from 'react-loadable';
import ErrorBoundary from './error/errorBoundary';
import LoadableBundle from './loadableBundle';

interface Props {
	props: object,
	loader: { view: () => Promise<{ default: React.ComponentState; }>, reducer?: () => Promise<{ default: object; }>, sagas?: () => Promise<{ default: object; }> }
}

interface State {
	mod: React.ComponentState
}

class LoadableMap extends React.Component<Props, State>{

	constructor(props: Readonly<Props>){
		super(props);
		const mod = Loadable.Map({
			loader: props.loader,
			render(loaded:{view: {default: React.ComponentState}, reducer?: {default: object}, sagas?: {default: object}}, renderProps: Readonly<{}>){
				const {view, reducer, sagas} = loaded;
				const _view = view && view.default;
				const _reducer = reducer && reducer.default;
				const _sagas = sagas && sagas.default;
				if(_view){
					if(_reducer || _sagas){
						return <ErrorBoundary><LoadableBundle reducer={_reducer} sagas={_sagas} view={_view} viewProps={renderProps}/></ErrorBoundary>;
					}else{
						return <ErrorBoundary>{React.createElement(_view, renderProps)}</ErrorBoundary>
					}
				}else{
					return <div>未传入视图</div>;
				}
			},
			loading: () => <div>页面加载中...</div>
		});
		this.state = { mod };
	}

	render() {
		const View = this.state.mod;
		return <View {...this.props.props}/>;
	}
}

export default LoadableMap;
