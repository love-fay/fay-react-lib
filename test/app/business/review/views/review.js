import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

import Tabs from  "rjd/tabs"

import '../style/index.less';
import {prefix} from "../../../classNamePrefix";

import ReviewTable from './reviewTable';
import ReviewOperation from './reviewOperation';

const TabPane = Tabs.TabPane;

export default withRouter(({history, location, offsetTop = 0}) => {
    const stylePrefix = prefix + '-review';

    const onChange = (key) => {

    };

    return (
        <div className={stylePrefix}>
            <ReviewOperation/>
            <Tabs defaultActiveKey="launch" onChange={onChange}>
                <TabPane tab="我发起的" key="launch">
                    <ReviewTable offsetTop={offsetTop}/>
                </TabPane>
                <TabPane tab="我收到的" key="receive">
                    我收到的
                    <ReviewTable offsetTop={offsetTop}/>
                </TabPane>
                <TabPane tab="全部" key="all">
                    全部
                    <ReviewTable offsetTop={offsetTop}/>
                </TabPane>
            </Tabs>
        </div>
    )
})