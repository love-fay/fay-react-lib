import React from 'react';
import {withRouter} from 'react-router-dom';
import Router from './router';

export default withRouter(({location}) => {
    const {pathname} = location;
    const pathPrefix = pathname.split('/')[1];
    return Router[pathPrefix];
})