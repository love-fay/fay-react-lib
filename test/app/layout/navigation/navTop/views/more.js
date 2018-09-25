import React from 'react';
import Menu from 'rjd/menu';
import Icon from 'rjd/icon';
import Dropdown from 'rjd/dropdown';

export default () => {

    const onClick = ({key}) => {
        console.log(key);
    };

    const menu = (
        <Menu onClick={onClick}>
            <Menu.Item key='1'>更多一</Menu.Item>
            <Menu.Item key='2'>更多二</Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} trigger={['click']} style={{width:'100%'}}>
            <Icon type="gd" />
        </Dropdown>
    )
}