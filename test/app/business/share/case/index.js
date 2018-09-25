import React from 'react';
import Space from 'rjd/space';
import {prefix} from "../../../classNamePrefix";
import './style/index.less';
import data from './data.json';

export default () => {

    const loop = (data) => data.map((item, i) => {
        const {name, tag, synopsis, user, time} = item;
        return (
            <div key={i} className={stylePrefix+'-item'}>
                <div><span className={stylePrefix+'-name'}>{name}</span><Space/><span className={stylePrefix+'-tag'}>{tag}</span></div>
                <div className={stylePrefix+'-synopsis'}>{synopsis}</div>
                <div className={stylePrefix+'-bottom'}>
                    <div className={stylePrefix+'-user'}>{user}</div>
                    <div className={stylePrefix+'-time'}>{time}</div>
                </div>
            </div>
        )
    });
    const stylePrefix = prefix + '-share-case';
    return (
        <div className={stylePrefix}>
            {loop(data)}
        </div>
    )
}