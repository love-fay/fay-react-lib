import React from 'react';
import Input from "rjd/input/index";
import {prefix} from "../../../classNamePrefix";
import '../style/index.less';
const Search = Input.Search;

export default () => {
    const stylePrefix = prefix + '-search';
    return (
        <div className={stylePrefix}>
            <div className={stylePrefix+'-input'}>
                <Search placeholder="请输入关键词搜索" onSearch={value => console.log(value)} />
            </div>
            <div>
                搜索结果
            </div>
        </div>
    )
}