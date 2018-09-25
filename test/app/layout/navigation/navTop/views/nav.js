/**
 * Created by feichongzheng on 16/12/15.
 */
import React, {Component} from 'react';
import Menu from 'rjd/menu';
import Icon from 'rjd/icon';
import Tooltip from 'rjd/tooltip';
import '../style/index.less';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import Personal from '../../../../personal/index';
import {prefix} from "../../../../classNamePrefix";
import data from './data.json';
import Link from './link';
import More from './more';
const SubMenu = Menu.SubMenu;

let pathname;

class Nav extends Component {

    static propTypes = {
        onChange: PropTypes.func,
    };

    constructor(props) {
        super(props);
        const {location} = props;
        pathname = location.pathname;
        pathname = pathname.indexOf('/') === 0 ? '/' + pathname.split('/')[1] : (pathname && '/' + pathname.split('/')[0]);
        this.state = {
            left: '0'
        }
    }

    nav = data => data.map((item) => {
        const {name, key, type} = item;
        return (
            <Menu.Item key={key}>
                <Icon type={type}/>&nbsp;
                <span>{name}</span>
            </Menu.Item>
        )
    });

    handleScroll = () => {
        const left = document.documentElement.scrollLeft || document.body.scrollLeft;
        this.setState({left: -left});
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const stylePrefix = prefix + '-layout-nav-top';
        const {left} = this.state;
        return (
            <Menu onClick={this.props.onChange}
                  selectedKeys={[pathname]}
                  mode="horizontal"
                  className={stylePrefix}
                  style={{...this.props.style, left: left}}
            >
                <Menu.Item key="home">
                    <div className={stylePrefix + '-systemName'}>
                        <p>福建法院</p>
                        <p>审判信息系统</p>
                    </div>
                </Menu.Item>
                {this.nav(data)}
                <SubMenu title={<span><Icon type='gd' style={{color:'#ffffff'}}/></span>}>
                    <Menu.Item key='/dyzx'>打印中心</Menu.Item>
                    <Menu.Item key='/gxjh'>共享交换</Menu.Item>
                    <Menu.Item key='/uums'>系统管理</Menu.Item>
                    <Menu.Item key='/yxjk'>运行监控</Menu.Item>
                </SubMenu>

                <Menu.Item key="personal" className={stylePrefix + '-personal'}>
                    <Personal/>
                </Menu.Item>
                <Menu.Item key="link" className={stylePrefix + '-item-right'}>
                    <Link/>
                </Menu.Item>
                <Menu.Item key="question" className={stylePrefix + '-item-right'}>
                    <Tooltip title="问题反馈" placement="bottom" autoAdjustOverflow>
                        <div><Icon type="wtfk"/></div>
                    </Tooltip>
                </Menu.Item>
                <Menu.Item key="share" className={stylePrefix + '-item-right'}>
                    <Tooltip title="分享" placement="bottom" autoAdjustOverflow>
                        <div><Icon type="fx"/></div>
                    </Tooltip>
                </Menu.Item>
                <Menu.Item key="im" className={stylePrefix + '-item-right'}>
                    <Tooltip title="即时通讯" placement="bottom" autoAdjustOverflow>
                        <div><Icon type="jstx"/></div>
                    </Tooltip>
                </Menu.Item>
                {/* <Menu.Item key="search" className={stylePrefix + '-item-right'}>
                 <div>
                 <Icon type="ss"/>
                 </div>
                 </Menu.Item>*/}
            </Menu>
        )
    }
}

export default withRouter(Nav);
