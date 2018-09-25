import React,{Component} from 'react';
// import {withRouter} from '../../../../lib/router';
import {withRouter} from 'react-router-dom';
// import TestTest1 from '../../test-test1';
// import TestTest2 from '../../test-test2';

// import ReactLoadable from 'react-loadable';
// const TestTest1 = ReactLoadable.Map({
//     loader: {
//         view: () => import('../../test-test1/views/test')
//     },
//     render(loaded, props){
//         let {view, reducer, sagas} = loaded;
//         view = view && view.default;
//         reducer = reducer && reducer.default;
//         sagas = sagas && sagas.default;
//         const View = view;
//         return <View {...props}/>
//     },
//     loading: () => <div>loading...</div>
// });

class Test extends Component{

    // componentDidMount(){
    //     console.log('test');
    //     this.props.history.push('test?id=123', 123);
    // }

    onClick = () => {
        this.props.history.push({pathname: "/test2"});
        // this.props.history.push('test?id=12344444', 123);
    };

    render(){
        console.log(this.props.a);
        console.log('123');
        console.log(this.props.location);

        console.log(this.props.location);
        // const {location} = this.propsa;
        // const {search} = location;
        // const a = {
        //     '?id=123': <TestTest2 abc={2}><div>1</div></TestTest2>,
        //     '?id=12344444': <TestTest2 abc={2}><div>2</div></TestTest2>
        // };
        return (
            <button onClick={this.onClick}>点击我</button>
        )
    }
}

export default withRouter(Test);

