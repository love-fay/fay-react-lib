import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Menu from 'rjd/menu';
import Icon from 'rjd/icon';
import Dropdown from 'rjd/dropdown';


class Link extends Component {

    constructor(props) {
        super(props);
    }

    onClick = ({key}) => {
        if (key !== undefined) {
            const {history} = this.props;
            history.push(key);
        }
    };

    render() {
        const menu = (
            <Menu onClick={this.onClick}>
                <Menu.Item key='/dagl'>档案管理</Menu.Item>
                <Menu.Item key='/fxpt'>法信平台</Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={menu} trigger={['click']}>
                <Icon type="lj"/>
            </Dropdown>
        )
    }
}

export default withRouter(Link);
