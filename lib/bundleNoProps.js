/**
 * Created by feichongzheng on 17/9/12.
 */
import React from 'react';
import Bundle from './bundle';

export default ({load}) => <Bundle load={load}>{View => <View/>}</Bundle>;
