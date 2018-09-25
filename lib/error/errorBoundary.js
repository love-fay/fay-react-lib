import React from 'react';
import Button from 'rjd/button';

export default class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state={
            hasError: false,
        }
    }

    componentDidCatch(error, info){
        this.setState({hasError: true});
    }

    goBack = () => {
        window.history.go(-1);
    };

    goHome = () => {
        window.location.href = '/';
    };

    render(){
        if(this.state.hasError){
            const {info} = this.props;
            return <h1>{info ||<div>页面出现错误,加载失败<br/><Button onClick={this.goBack}>返回上一层</Button><Button onClick={this.goHome}>返回首页</Button></div>}</h1>;
        }
        return this.props.children;
    }
}