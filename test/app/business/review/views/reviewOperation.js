/**
 * Created by Administrator on 2018/6/6.
 */
import React, {Component} from 'react';

import Menu from 'rjd/menu';
import Icon from 'rjd/icon';
import Input from 'rjd/input';
import Space from 'rjd/space';
import Button from 'rjd/button';
import Dropdown from 'rjd/dropdown';

import '../style/index.less';
import {prefix} from '../../../classNamePrefix';
import ReviewModal from './reviewModal';

const Search = Input.Search;

class ReviewOperation extends Component{

    constructor(props){
        super(props);
    }

    handleMenuClick = (e) => {
        console.log('click', e.key);
    };

    approval = () => {
    };

    onSearch = (value) => {

    };

    render(){
        const stylePrefix = prefix + '-review-operate';
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1">立案审批</Menu.Item>
                <Menu.Item key="2">数据修改</Menu.Item>
                <Menu.Item key="3">延长审限</Menu.Item>
                <Menu.Item key="4">扣除审限</Menu.Item>
            </Menu>
        );
        return (
            <div className={stylePrefix}>
                <Search
                    placeholder="请输入材料名称或者案号搜索"
                    onSearch={this.onSearch}
                    className={stylePrefix+'-search'}
                />
                <div className={stylePrefix+'-buttons'}>
                    <ReviewModal/>
                    <Space/>
                    <Dropdown overlay={menu}>
                        <Button type="primary" ghost>
                            类型 <Icon type="down" />
                        </Button>
                    </Dropdown>
                </div>
            </div>
        )
    }
}

export default ReviewOperation;