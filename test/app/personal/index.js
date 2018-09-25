import React from 'react';
import {withRouter} from 'react-router-dom';
import {loginUser,logout} from "rj-lib/user";

import Avatar from 'rjd/avatar';
import Popover from 'rjd/popover';
import Card from 'rjd/card';
import Icon from 'rjd/icon';
import Space from 'rjd/space';

import './style/index.less';
import {prefix} from "../classNamePrefix";
import {userLogout} from "./logout";

const { Meta } = Card;

export default withRouter(({history, location}) => {


    let userInfo = loginUser();

    //let title =userInfo.bmmc !==null?`${userInfo.xm} ( ${userInfo.bmmc} )`: `${userInfo.xm}`;
    let image=userInfo.ryzp ?userInfo.ryzp:"/assets/images/headImage/defaultHeadImage.png";
    const stylePrefix = prefix + '-personal';
    const description=(
        <div>
            <span className={stylePrefix+"-card-description"}>{userInfo.bmmc}</span>
            <span className={stylePrefix+"-card-description"}>{userInfo.fymc}</span>
        </div>
    );
    const content = (
        <Card
            className={stylePrefix+'-card'}
            style={{ width: 300 }}
            bordered={false}
            actions={[<span><Icon type="setting" /><Space/>设置</span>, <span onClick={() => userLogout(history, location)}><Icon type="logout" /><Space/>退出</span>]}
        >
            <Meta
                avatar={<Avatar size="large" src={image} style={{width: '70px',height:'70px'}}/>}
                title={userInfo.xm}
                description={description}
            />
        </Card>
    );
    return (
        <Popover className={stylePrefix} content={content} placement="bottomRight" trigger='click'>
            <div style={{width: '100%', height: '100%', padding: '0 20px'}}>
                <Avatar size="large" src={image} />
            </div>
        </Popover>
    )
});