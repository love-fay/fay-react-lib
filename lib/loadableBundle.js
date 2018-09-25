/**
 * Created by feichongzheng on 17/9/12.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {injectAsyncStore, rejectAsyncStore} from './store';

class Bundle extends Component {

    static propTypes = {
        cache: PropTypes.bool
    };

    static contextTypes = {
        store: PropTypes.object
    };

    componentWillUnmount() {
        if(this.props.cache === false)
        rejectAsyncStore(this.props.reducer);
    }

    componentWillMount(){
        const {reducer, sagas} = this.props;
        injectAsyncStore(this.context.store, reducer, sagas);
    }

    render () {
        const {viewProps} = this.props;
        const View = this.props.view;
        return <View {...viewProps}/>;
    }
}

export default Bundle;
