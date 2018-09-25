/**
 * Created by feichongzheng on 16/12/15.
 */

import React from 'react';
import {NavTop} from '../navigation';
import PropTypes from 'prop-types';

const Layout = ({children, minWidth = 1420, className, style}) => {
    return (
        <div className={className} style={style}>
            <NavTop style={{minWidth}}/>
            <div style={{marginTop: '50px', minWidth}}>
                {children}
            </div>
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.any,
    minWidth: PropTypes.number,
    className: PropTypes.string,
    style: PropTypes.object
};

export default Layout;
