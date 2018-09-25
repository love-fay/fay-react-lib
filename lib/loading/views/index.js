import React from 'react';
import ReactDom from 'react-dom';
import Spin from 'rjd/spin';
import reducerName from "../reducerName";
import {connect} from 'react-redux';
import {SHOW} from '../actionType';
import '../style/index.less';

const mapStateToProps = (state) => {
    return {
        loading: state[reducerName]
    }
};

export default connect(mapStateToProps)(({loading}) => {
    const {type, tip=''} = loading;
    const display = type===SHOW?'block':'none';
    return ReactDom.createPortal(
        <div style={{display}} className='rj-lib-loading'>
            <Spin tip={tip}/>
        </div>,
        document.body
    );
})
