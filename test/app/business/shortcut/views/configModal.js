/**
 * Created by Administrator on 2018/5/14.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Modal from 'rjd/modal';
import Row from 'rjd/row'
import Col from 'rjd/col'
import Button from 'rjd/button'
import Anchor from 'rjd/anchor'
import Card from 'rjd/card'
import data from './data2.json';
import Category from './category'
import ClickHandler from './clickHandler'
import request from './request'
import {prefix} from "../../../classNamePrefix";

const {Link} = Anchor;

function onClickPlus(flag) {
    let flags = flag.split('-');
    let newMainItems = data.filter(item => item.type == flags[0]);
    if (newMainItems.length > 0) {
        let newChildItems = newMainItems[0].children.filter(item => item.type == flags[1]);
        if (newChildItems.length > 0) {
            const {selectedData} = this.state;
            let selectedMainItems = selectedData.filter(mainItem => mainItem.type == newMainItems[0].type)
            if (selectedMainItems.length > 0) {
                selectedMainItems[0].children.push(newChildItems[0]);
                this.setState({selectedData});
            }
        }
    }
}

function onClickMinus(flag){
    let flags = flag.split('-');
    const {selectedData} = this.state;
    let selectedMainItems = selectedData.filter(item => item.type == flags[0]);
    if (selectedMainItems.length > 0) {
        selectedMainItems[0].children.splice(selectedMainItems[0].children.findIndex(item => item.type == flags[1]),1);
        this.setState({selectedData});
    }
}

function onClickSave(){
    localStorage.setItem("kjrk-"+"",JSON.stringify(this.state.selectedData));
    this.props.onCancel();
}

function fetchDefaultSelectedData(){

    request('get','/shortcut/fetchConfigurableShortcuts').then(res => {
        let configurableShortcuts = data.map(item => {
            let children = [];
            let resMainItems = res.filter(storageMainItem => storageMainItem.type == item.type);
            if(resMainItems.length > 0 ){
                children = resMainItems[0].children;
            }
            return Object.assign({}, item, {children});
        });
        this.setState({configurableShortcuts});
    });

    let storageData = JSON.parse(localStorage.getItem("kjrk-"+""));
    let defaultSelectedData = data.map(item => {
        if(storageData){
            let storageMainItems = storageData.filter(storageMainItem => storageMainItem.type == item.type);
            if(storageMainItems.length > 0 ){
                let children  = storageMainItems[0].children;
                return Object.assign({}, item, {children});
            }
        }else{
            return Object.assign({}, item, {children:item.children.concat()});
        }
    });
    this.setState({selectedData: defaultSelectedData});
}

export default class ConfigModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            configurableShortcuts: [],    //用户可配置项
            selectedData: [],    //用户已配置项
            flag:""    //用户点击的配置项
        }
    }

    componentWillMount() {
        fetchDefaultSelectedData.call(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.visible == true){
            fetchDefaultSelectedData.call(this);
        }
    }


    render() {

        const stylePrefix = prefix + '-shortcut-configModal';
        return (
            <Modal
                title="快捷入口配置"
                visible={this.props.visible}
                onCancel={this.props.onCancel}
                maskClosable={false}
                mask={false}
                footer={null}
                width={this.props.width}
                style={this.props.style}
                bodyStyle={this.props.bodyStyle}
                className={stylePrefix}
            >

                <ClickHandler flag={this.state.flag} onCancel={() => this.setState({flag: ""})} />

                <Row gutter={32} style={{height: "calc(100% - 90px)"}}>
                    <Col span={12} style={{height: "100%"}}>
                        <Card title="快捷入口配置项"
                              style={{height: "100%"}}
                              bodyStyle={{padding: 20, height: "calc(100% - 30px)"}}
                              bordered={true}
                        >
                            <Anchor style={{float: "left", marginRight: 50}} affix={false} showInkInFixed={true}
                                    getContainer={()=> {
                                        return document.querySelector(".scollcontent");
                                    } }>
                                {data.map(({type, main}) => {
                                    return <Link key={type} href={'#' + type} title={main}/>
                                })}
                            </Anchor>
                            <div className="scollcontent" style={{overflowY: "auto", height: "100%"}} onWheel={e => e.stopPropagation()}>
                                {data.map(({main, type, children}, index) => {
                                    let selectedMainItems = this.state.selectedData.filter(mainItem => mainItem.type == type);
                                    return (
                                        <Category key={type}
                                                  main={main}
                                                  type={type}
                                                  children={children}
                                                  n={index+1}
                                                  selectedItems={selectedMainItems[0].children}
                                                  onClickPlus={(flag)=>onClickPlus.call(this, flag)}
                                                  onClickMinus={(flag)=>onClickMinus.call(this, flag)}
                                                  onClickItem ={(flag)=>this.setState({flag})}
                                        />
                                    );
                                })}
                            </div>

                        </Card>
                    </Col>
                    <Col span={12} style={{height: "100%"}}>
                        <Card title="首页快捷入口（最多配置5个）"
                              style={{height: "100%"}}
                              bodyStyle={{padding: 20, height: "calc(100% - 30px)"}}
                              bordered={true}
                        >
                            <div style={{overflowY: "auto", height: "100%"}} onWheel={e => e.stopPropagation()} >
                                {this.state.selectedData.map(({main, type, children}, index) => {
                                    let selectedMainItems = this.state.selectedData.filter(mainItem => mainItem.type == type);
                                    return (
                                        <Category key={type}
                                                  main={main}
                                                  type={type}
                                                  children={children}
                                                  n={index+1}
                                                  selectedItems={selectedMainItems[0].children}
                                                  onClickPlus={(type)=>onClickPlus.call(this, type)}
                                                  onClickMinus={(flag)=>onClickMinus.call(this, flag)}
                                                  onClickItem ={(flag)=>this.setState({flag})}
                                        />
                                    );
                                })}
                            </div>
                        </Card>
                    </Col>
                </Row>
                <div style={{marginTop: 30}}>
                    <Button type="primary" size="large" onClick={() => onClickSave.call(this) } style={{float: "right", marginLeft: 10}}>保存</Button>
                    <Button size="large" onClick={this.props.onCancel} style={{float: "right"}} >取消</Button>
                </div>

            </Modal>
        );

    }

}

ConfigModal.propTypes = {
    visible: PropTypes.bool.isRequired,
    width: PropTypes.number.isRequired,
    bodyStyle: PropTypes.object.isRequired,
    onCancel: PropTypes.func.isRequired
};
