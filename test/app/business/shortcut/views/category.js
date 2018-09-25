/**
 * Created by Administrator on 2018/5/16.
 */
import React from 'react';
import ConfigItem from './configItem'
import {prefix} from "../../../classNamePrefix";

export default ({main,type,children,n,selectedItems,onClickPlus,onClickMinus,onClickItem}) => {
    const stylePrefix = prefix + '-shortcut';
    const categoryType = type;
    return (
        <div>
            <div><a id={categoryType} className={stylePrefix+"-anchor"}>{main}</a> </div>
            <div>
                {children.map( ({name,type,modalWidth}) =>{
                    let items = selectedItems.filter(item => item.type == type);
                    return (
                        <ConfigItem key={type}
                                    name={name}
                                    categoryType={categoryType}
                                    type={type}
                                    n={n}
                                    isSelected={items.length > 0}
                                    onClickPlus={onClickPlus}
                                    onClickMinus={onClickMinus}
                                    onClick={onClickItem}
                        />
                    );
                })}
            </div>
        </div>
    )
}