import React,{Component} from 'react';
import Input from 'rjd/input';
import Button from 'rjd/button';
import Tabs from 'rjd/tabs';
import Icon from 'rjd/icon';
const TabPane = Tabs.TabPane;
const Search = Input.Search;
import '../style/index.less';
import {prefix} from "../../../classNamePrefix";
import classnames from 'classnames';
import Case from '../case';
import Instrument from '../instrument';
import More from '../more';

class Share extends Component{

    state = {
        myShare: false
    };

    myShare = (myShare) => {
        this.setState({myShare});
    };

    render(){
        const stylePrefix = prefix + '-share';
        const {myShare} = this.state;
        return (
            <div className={stylePrefix}>
                <div className={stylePrefix+'-search'}>
                    <Search
                        placeholder="请输入关键词搜索"
                        onSearch={value => console.log(value)}
                    />
                </div>
                <div>
                    <Button onClick={()=>this.myShare(false)} className={classnames(stylePrefix+'-button', myShare && stylePrefix+'-button-noSelected')} ghost>最新分享</Button>
                    <Button onClick={()=>this.myShare(true)} className={classnames(stylePrefix+'-button', myShare || stylePrefix+'-button-noSelected')} ghost>我的分享</Button>
                </div>
                <Tabs>
                    <TabPane tab={<span><Icon type='aj'/>案件</span>} key='1'>
                        <Case/>
                    </TabPane>
                    <TabPane tab={<span><Icon type='ws'/>文书</span>} key='2'>
                        <Instrument/>
                    </TabPane>
                    <TabPane tab={<span><Icon type='appstore-o'/>更多</span>} key='3'>
                        <More/>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Share;