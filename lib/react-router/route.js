import React from 'react';
import {withRouter} from 'react-router-dom';

class Route extends React.Component{

    samePath = (param) => {
        let path = '';
        if(typeof param === 'string')path=param;
        if(typeof param === 'object'){
            const {pathname='', search='', hash=''} = param;
            path=pathname + search + hash;
        }
        if(path.indexOf('/') !== 0) path = '/' + path;
        const currentPath = window.location.href.substr(window.location.origin.length);
        return path === currentPath;
    };


    push = (...params) => {
        if(!this.samePath(params[0])) this.props.history.push(...params);
    };

    replace = (...params) => {
        if(!this.samePath(params[0])) this.props.history.replace(...params);
    };

    render(){
        const {history, location, children} = this.props;
        return children({history: {...history, push: this.push}, location});
    }
}

export default withRouter(Route);