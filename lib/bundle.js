/**
 * Created by feichongzheng on 17/9/12.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {injectAsyncStore, rejectAsyncStore} from './store';

class Bundle extends Component {

    static propTypes = {
        load: PropTypes.any,
        children: PropTypes.any,
        defaultComponent: PropTypes.any,
        cache: PropTypes.bool
    };

    static contextTypes = {
        store: PropTypes.object
    };

    state = {
        mod: null,
        reducer: null
    };

    componentWillMount () {
        this._isMounted = true;
        this.load(this.props);
    }

    componentWillUnmount() {
        this._isMounted = false;
        if(this.props.cache === false)
        rejectAsyncStore(this.state.reducer);
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.load !== this.props.load) {
            this.load(nextProps);
        }
    }

    load (props) {
        this.setState({
            mod: null,
        });
        props.load((mod) => {
            const {reducer, view, sagas} = mod;
            injectAsyncStore(this.context.store, reducer, sagas);
            if (this._isMounted) {
                const v = view || mod;
                this.setState({
                    mod: v['default'] ? v['default'] : v,
                    reducer: reducer
                });
            }
        });
    }

    render () {
        const {mod} = this.state;
        const {children, defaultComponent} = this.props;
        return mod ? children(mod) : (defaultComponent ? {defaultComponent} : <div>loading...</div>);
    }
}

export default Bundle;
