/**
 * Created by feichongzheng on 17/10/13.
 */
import React from 'react';
import Layout from '../../layout/1-1';
import MessageCenter from 'court-message-center';
import './style/index.less';
import {prefix} from "../../classNamePrefix";

export default () => {
    const stylePrefix = prefix + '-message-center';
    return <Layout className={stylePrefix}><MessageCenter/></Layout>;
}
