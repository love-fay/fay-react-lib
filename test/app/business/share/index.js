/**
 * Created by feichongzheng on 17/10/13.
 */
import React from 'react';
import Bundle from 'rj-lib/bundle';
import load from 'bundle-loader?lazy&name=CourtShare!./lazy';

export default (props) => <Bundle load={load}>{(View) => <View {...props}/>}</Bundle>;
