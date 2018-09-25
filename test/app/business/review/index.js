/**
 * Created by feichongzheng on 17/9/27.
 */
import React from 'react';
import Bundle from 'rj-lib/bundle';
import load from 'bundle-loader?lazy&name=[Review]!./lazy';

export default (props) => {
    return (
        <Bundle load={load}>
            {(View) => {
                return <View {...props}/>
            }}
        </Bundle>
    );
};