import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import Icon from "rjd/icon";
import Row from "rjd/row";
import Col from "rjd/col";
import Space from "rjd/space";
import ConfigModal from "./configModal";
import ClickHandler from "./clickHandler";
import {prefix} from "../../../classNamePrefix";
import common from "./common";
import classnames from "classnames";
import data from './data2.json';
import "../style/index.less";


class ShortCut extends Component{

    constructor(props) {
        super(props);
        this.state = {
            configVisible:false,
            flag: ""
        }
    }

    render(){
        const stylePrefix = prefix + '-shortcut';

        const items = (type,data, n) => {
            let mainType = type;
            return data.map((item, i) => {
                const { name, type} = item;
                const classNameIcon = classnames(stylePrefix+'-childIcon', stylePrefix+'-colIcon'+n);
                return (
                    <Col span={24} key={n+'-'+i} className={classnames(stylePrefix+'-childIconCol', stylePrefix+'-childIconCol-'+(i+1))}
                         onClick={() => this.setState({flag:mainType+'-'+type})}
                    >
                        <Icon type={type} className={classNameIcon}/>
                        <div>{name}</div>
                    </Col>
                )
            })
        };

        let content = null;
        let storageData = JSON.parse(localStorage.getItem("kjrk-"+""));
        if(storageData){
            content = storageData.map((item, i) => {
                const {src,type} = item;
                return (
                    <Col span={3} key={i}>
                        <Row>
                            <Col span={24}>
                                <img src={src} />
                            </Col>
                            {items(type,item.children, i+1)}
                        </Row>
                    </Col>
                )
            });
        }else{
            content = data.map((item, i) => {
                const {src,type} = item;
                return (
                    <Col span={3} key={i}>
                        <Row>
                            <Col span={24} >
                                <img src={src} />
                            </Col>
                            {items(type,item.children, i+1)}
                        </Row>
                    </Col>
                )
            });
        }



        return (
            <div className={stylePrefix}>

                <ClickHandler flag={this.state.flag} onCancel={() => this.setState({flag: ""})} />

                <ConfigModal visible={this.state.configVisible} width={common.getBodyWidth()-22} style={{top:50}} bodyStyle={{padding:10,height:common.getHeight()-118}}onCancel={()=>this.setState({configVisible:false})} />

                <span className={stylePrefix+'-title'}><Icon type='appstore-o' className={stylePrefix+'-title-icon'} /><Space/>快捷入口</span>
                <div className={stylePrefix+'-setting'} onClick={() => this.setState({configVisible:true})} ><Icon type='setting'/></div>
                <div className={stylePrefix+'-content'}>
                    <Row>
                        {content}
                    </Row>
                </div>
            </div>
        )
    }
}

export default withRouter(ShortCut);