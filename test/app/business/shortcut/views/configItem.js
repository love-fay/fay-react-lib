/**
 * Created by Administrator on 2018/5/16.
 */
import React from 'react';
import Icon from 'rjd/icon';
import classnames from 'classnames';
import {prefix} from "../../../classNamePrefix";

function onClickMinusItem(e, flag, onClickMinus) {
    e.stopPropagation();
    onClickMinus(flag);
}

function onClickPlusItem(e, flag, onClickPlus) {
    e.stopPropagation();
    onClickPlus(flag);
}


export default ({categoryType, type, name, n, isSelected, onClickPlus, onClickMinus, onClick}) => {

    const stylePrefix = prefix + '-shortcut';
    const classNameIcon = classnames(stylePrefix + '-childIcon', stylePrefix + '-colIcon' + n);
    return (
        <div className={stylePrefix + '-configItem'}
             style={{display: "inline-block", marginRight: 20}}
             onClick={(e) => onClick(categoryType + "-" + type)}
        >
            <div style={{padding: 12, textAlign: "center", position: "relative"}}>
                {
                    isSelected ?
                        <Icon type="minus-circle" className="minus-circle"
                              onClick={(e) => onClickMinusItem.call(this,e,categoryType + "-" + type,onClickMinus)} />
                        :
                        <Icon type="plus-circle" className="plus-circle"
                              onClick={(e) => onClickPlusItem.call(this,e,categoryType + "-" + type,onClickPlus)}/>
                }
                <Icon type={type} className={classNameIcon}/>
                <div style={{marginTop: 6}}>{name}</div>
            </div>
        </div>
    );
}