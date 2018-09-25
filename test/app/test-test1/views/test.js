import React,{Component} from 'react';
import {withRouter} from '../../../../lib/react-router';

class Test extends Component{

    componentDidMount(){
        console.log('test-test1');
    }

    render(){
        console.log(this.props);
        return (
            <div>test-test1</div>
        )
    }
}

export default withRouter(Test);

