import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        loading: {
            show: (tip) => {
                dispatch(actions.show(tip));
            },
            hide: () => {
                dispatch(actions.hide());
            }
        }
    }
};

export default C => connect(null, mapDispatchToProps)(C);