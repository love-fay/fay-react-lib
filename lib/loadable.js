import React from 'react';
import Loadable from 'react-loadable';
import LoadableBundle from './loadableBundle';
import ErrorBoundary from './error/errorBoundary';

class LoadableMap extends React.Component{

    constructor(props){
        super(props);
        const mod = Loadable.Map({
            loader: props.loader,
            render(loaded, props){
                let {view, reducer, sagas} = loaded;
                view = view && view.default;
                reducer = reducer && reducer.default;
                sagas = sagas && sagas.default;
                if(reducer || sagas){
                    return <ErrorBoundary><LoadableBundle reducer={reducer} sagas={sagas} view={view} viewProps={props}/></ErrorBoundary>
                }else{
                    return <ErrorBoundary>{React.createElement(view, props)}</ErrorBoundary>
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