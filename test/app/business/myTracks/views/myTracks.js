import React from 'react';
import Icon from 'rjd/icon';
import Space from 'rjd/space';
import Timeline from 'rjd/timeline';
import {prefix} from "../../../classNamePrefix";
import '../style/index.less';

export default () => {

    const stylePrefix = prefix + '-myTracks';

    return (
        <div className={stylePrefix}>
            <span className={stylePrefix+'-title'}><Icon type='wdzj' className={stylePrefix+'-title-icon'}/><Space/>我的足迹</span>
            <Timeline className={stylePrefix+'-timeline'}>
                <Timeline.Item dot={<Icon type="ckjl" style={{ fontSize: '40px' }} />} className={stylePrefix+'-timeline-item'}>
                    <div className={stylePrefix+'-timeline-item-time'}>2017-12-30 09:23:33</div>
                    <div className={stylePrefix+'-timeline-item-content'}>申请延长审限，申请人李青龙婚姻家庭...【（2018）闽清申3号】</div>
                </Timeline.Item>
                <Timeline.Item dot={<Icon type="ssjl" style={{ fontSize: '40px', color: '#99b96b' }} />} className={stylePrefix+'-timeline-item'}>
                    <div className={stylePrefix+'-timeline-item-time'}>2017-12-29 09:23:33</div>
                    <div className={stylePrefix+'-timeline-item-content'}>搜索当事人信息【张三】</div>
                </Timeline.Item>
                <Timeline.Item dot={<Icon type="ckjl" style={{ fontSize: '40px' }} />} className={stylePrefix+'-timeline-item'}>
                    <div className={stylePrefix+'-timeline-item-time'}>2017-12-28 09:23:33</div>
                    <div className={stylePrefix+'-timeline-item-content'}>参与案件评议，申请人李青龙婚姻家庭...【（2018）闽清申3号】</div>
                </Timeline.Item>
                <Timeline.Item dot={<Icon type="ckjl" style={{ fontSize: '40px' }} />} className={stylePrefix+'-timeline-item'}>
                    <div className={stylePrefix+'-timeline-item-time'}>2017-12-27 09:23:33</div>
                    <div className={stylePrefix+'-timeline-item-content'}>于第一法庭开庭审理，申请人李青龙婚...【（2018）闽清申3号】</div>
                </Timeline.Item>
                <Timeline.Item dot={<Icon type="ckjl" style={{ fontSize: '40px' }} />} className={stylePrefix+'-timeline-item'}>
                    <div className={stylePrefix+'-timeline-item-time'}>2017-12-27 09:23:33</div>
                    <div className={stylePrefix+'-timeline-item-content'}>于第一法庭开庭审理，申请人李青龙婚...【（2018）闽清申3号】</div>
                </Timeline.Item>
                <Timeline.Item dot={<Icon type="gdjl" style={{ fontSize: '40px', color: '#aaaaaa' }} />} className={stylePrefix+'-timeline-item'}>
                    <div className={stylePrefix+'-timeline-item-text'}>更多</div>
                </Timeline.Item>
            </Timeline>
        </div>
    )
}