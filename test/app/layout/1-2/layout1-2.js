/**
 * Created by feichongzheng on 16/12/15.
 */

import React from 'react';
import {NavTop, NavLeft} from '../navigation';
import PropTypes from 'prop-types';

const Layout = ({children, minWidth = 1420}) => {
    return (
        <div>
            <NavTop style={{minWidth}}/>
            <NavLeft width='152px'/>
            <div style={{top: '50px', left: '152px', right: '20px', bottom: '20px', position:'fixed'}}>
                {children}
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
    minWidth: PropTypes.number
};

export default Layout;
