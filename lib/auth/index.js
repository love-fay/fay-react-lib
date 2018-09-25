import React, {Component} from 'react';
import {isLogin} from '../user';
import {withRouter} from 'react-router-dom';

class Auth extends Component{

    goToLogin = () => {
        const {location, history} = this.props;
        const {pathname} = location;
        try {
            const href = window.location.href;
            window.location.origin = (pathname === '' || pathname === '/') ? href : href.split(pathname)[0];
        } catch (e) {
        }
        if(this.needLogin(this.props)){
            history.push('/login',{ from: location });
        }
    };

    needLogin = ({location, unAuth}) => {
        const {pathname} = location;
        return !isLogin() && pathname !== '/login' && !(unAuth && unAuth.includes(pathname));
    };

    componentDidMount(){
        this.goToLogin();
    }

    componentDidUpdate(){
        this.goToLogin();
    }

    render(){
        if(this.needLogin(this.props)){
            return <div/>;
        }
        return this.props.children;
    }
}

export default withRouter(Auth);