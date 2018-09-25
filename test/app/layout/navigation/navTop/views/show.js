import React, {Component} from 'react';
import {prefix} from "../../../../classNamePrefix";
import Icon from 'rjd/icon';
import classnames from 'classnames';

class Show extends Component{

    render(){
        const {title, children, onChange, visible} = this.props;
        const stylePrefix = prefix + '-layout-nav-top-show';
        const rootClassName = classnames(stylePrefix, visible ? stylePrefix + '-open':stylePrefix + '-close');
        return  (
            <div className={rootClassName}>
                <div className={stylePrefix + '-title'}>
                    <div className={stylePrefix+'-title-content'}>{title}</div>
                    <div className={stylePrefix+'-title-close'} onClick={()=>onChange(false)}>{visible ? <Icon type='close'/>:''}</div>
                </div>
                <div>
                    {children}
                </div>
            </div>
        )
    }
}

export default Show;