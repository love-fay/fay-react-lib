import React,{Component} from 'react';
import {withRouter} from '../../../../lib/react-router';

class Test extends Component{

    componentDidMount(){
        console.log('test-test2');
    }

    render(){
        console.log(this.props);
        return (
            <div>test-test2{this.props.children}</div>
        )
    }
}

export default withRouter(Test);

