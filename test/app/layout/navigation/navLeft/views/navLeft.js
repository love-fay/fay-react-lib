/**
 * Created by feichongzheng on 16/12/15.
 */
import React, {Component} from 'react';
import Menu from 'rjd/menu';
import Icon from 'rjd/icon';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Scroll from 'rjd/scroll';
import {prefix} from "../../../../classNamePrefix";
import '../style/index.less';

let pathname;

class NavLeft extends Component {

    constructor (props) {
        super(props);
        const location = props.location;
        pathname = location.pathname;
        pathname = pathname.indexOf('/') === 0 ? pathname : '/' + pathname;
        this.state = {
            openKeys: ['/'+pathname.split('/')[1]],
        };
    }

    handleClick = (e) => {
        const {history} = this.props;
        let key = e.key;
        if (key !== undefined) {
            pathname = key;
            history.push(key, null);
        }
    };

    render () {
        const {openKeys} = this.state;
        const {style, width} = this.props;
        const stylePrefix = prefix + '-layout-nav-left';
        return (
            <Scroll className={stylePrefix} style={style}>
                <Menu onClick={this.handleClick}
                      defaultOpenKeys={openKeys}
                      style={{width:width}}
                      className={stylePrefix+'-menu'}
                      selectedKeys={[pathname]}
                      mode="inline">
                    <Menu.Item key='/'>
                        <Icon type="wdmh" />&nbsp;
                        <span>我的门户</span>
                    </Menu.Item>
                    <Menu.Item key='/message-center/dydb'>
                        <Icon type="dydb" />&nbsp;
                        <span>待阅消息</span>
                    </Menu.Item>
                    <Menu.Item key='/message-center/yyyb'>
                        <Icon type="yyyb" />&nbsp;
                        <span>已阅消息</span>
                    </Menu.Item>
                    <Menu.Item key='/message-center/yfxx'>
                        <Icon type="yfxx" />&nbsp;
                        <span>已发消息</span>
                    </Menu.Item>
                    <Menu.Item key='/message-center/jrxx'>
                        <Icon type="jrxx" />&nbsp;
                        <span>今日消息</span>
                    </Menu.Item>
                    <Menu.Item key='/message-center/bzxx'>
                        <Icon type="bzxx" />&nbsp;
                        <span>本周消息</span>
                    </Menu.Item>
                    <Menu.Item key='/message-center/byxx'>
                        <Icon type="byxx" />&nbsp;
                        <span>本月消息</span>
                    </Menu.Item>
                    <Menu.Item key='/message-center/xxcx'>
                        <Icon type="xxcx" />&nbsp;
                        <span>消息查询</span>
                    </Menu.Item>
                </Menu>
            </Scroll>
        );
    }
}

NavLeft.propTypes = {
    location: PropTypes.any,
    history: PropTypes.object,
};

export default withRouter(NavLeft);
