import React,{Component} from 'react';
import Icon from 'rjd/icon';
import Space from 'rjd/space';
import Timeline from 'rjd/timeline';
import {prefix} from "../../../classNamePrefix";
import data1 from './readyToRead1.json';
import data2 from './readyToRead2.json';
import '../style/index.less';

class ReadyToRead extends Component{

    state = {
        pageNum: 1,
        pageCount: 2,
        zfy: false,
        yfy: true,
    };

    data = {
        1: data1,
        2: data2
    };

    skip = (num) => {
        this.setState({
            pageNum: num,
            zfy: num > 1,
            yfy: num < this.state.pageCount
        })
    };

    render(){
        const stylePrefix = prefix + '-readyToRead';
        const {pageNum, pageCount, zfy, yfy} = this.state;
        const loop = (data) => data.map((item, i) => {
            const {content, time} = item;
            return  (
                <Timeline.Item className={stylePrefix+'-timeline-item'} key={i}>
                    <div className={stylePrefix+'-timeline-item-content'}>{content}</div>
                    <div className={stylePrefix+'-timeline-item-time'}>{time}</div>
                </Timeline.Item>
            )
        });
        return (
            <div className={stylePrefix}>
                <span className={stylePrefix+'-title'}><Icon type='dydb' className={stylePrefix+'-title-icon'}/><Space/>待办待阅</span>
                <div className={stylePrefix+'-page'}>
                    {pageNum}/{pageCount}
                    <Space/>
                    <Icon onClick={() => zfy && this.skip(pageNum-1)} type='zfy' className={zfy ? stylePrefix+'-page-icon' : stylePrefix+'-page-icon-disable'}/>
                    <Space/>
                    <Icon type='yfy' onClick={() => yfy && this.skip(pageNum+1)} className={yfy ? stylePrefix+'-page-icon' : stylePrefix+'-page-icon-disable'}/>
                </div>
                <Timeline className={stylePrefix+'-timeline'}>
                    {loop(this.data[pageNum])}
                </Timeline>
            </div>
        )
    }
}

export default ReadyToRead;