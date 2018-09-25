import React from 'react';
import {connect} from 'react-redux';
import {push, replace, go, goBack, goForward} from 'connected-react-router';

const mapStateToProps = (state) => {
    return {
        location: state.router.location,
        pathname: state.router.location.pathname
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        history: {
            // push: function () {
            //     if(arguments.length === 1){
            //         dispatch(push(arguments[0]));
            //     }else if(arguments.length === 2){
            //         dispatch(push(arguments[0], arguments[1]));
            //     }
            // },
            push: function (path) {
                console.log(path);
                dispatch(push(path));
                // if(arguments.length === 1){
                //     dispatch(push(arguments[0]));
                // }else if(arguments.length === 2){
                //     dispatch(push(arguments[0], arguments[1]));
                // }
            },
            replace: function () {
                if(arguments.length === 1){
                    dispatch(replace(arguments[0]));
                }else if(arguments.length === 2){
                    dispatch(replace(arguments[0], arguments[1]));
                }
            },
            go: function (n) {
                dispatch(go(n));
            },
            goBack: function () {
                dispatch(goBack());
            },
            goForward: function () {
                dispatch(goForward());
            }
        }
    }
};

export default (C) => connect(mapStateToProps, mapDispatchToProps)(C);