import React,{Component} from 'react';
import {withRouter} from 'react-router-dom';

class Index extends Component{

    componentDidMount(){
        // console.log(123);
        // const search = this.props.location.search;
        // if(search === '')
        // this.props.history.push('test2?search=123');
    }

    onClick = () => {
        this.props.history.push({pathname: "/test"});
        // this.props.history.push('test?id=12344444', 123);
    };

    render(){
        return (
            <div>test2<button onClick={this.onClick}>点击我</button></div>
        )
    }
}

export default withRouter(Index);

