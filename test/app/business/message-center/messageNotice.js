/**
 * Created by Administrator on 2018/6/4.
 */
import React, {Component} from "react";
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';
import SystemMessage from 'court-im/components/open-mind/systemMessage';
import request from './request'
import XMPP from "strophe.js";
import message from 'rjd/message'
import CaseDetailsModal from '../share/views/caseDetailsModal'
import InstrumentModal from '../share/views/instrumentModal'


function urlHandler(url) {
    let res = new Map();
    try {
        let itemUrls = url.split('?');
        let paramValues = itemUrls[1].split('&');
        paramValues.map(item => {
            let keyValuePairs = item.split('=');
            res.set(keyValuePairs[0], keyValuePairs[1]);
        })
        res.set('success', true);
    } catch (e) {
        res.set('success', false);
    }
    return res;
}


function onClickItem(msg) {

    let elems = null, appSn = null, infoId = null, type = null, url = null;
    elems = msg.getElementsByTagName('appSn');
    appSn = XMPP.Strophe.getText(elems[0]);
    elems = msg.getElementsByTagName('infoId');
    infoId = XMPP.Strophe.getText(elems[0]);
    elems = msg.getElementsByTagName('type');
    type = XMPP.Strophe.getText(elems[0]);
    elems = msg.getElementsByTagName('url');
    url = elems[0].childNodes[0].nodeValue;

    request('post', "/messageCenter/signDoneMessage", {
        id: infoId
    }).then(({code, data, properties}) => {
        if (code != "success") {
            message.error('操作失败');
        }
    }).catch(e => message.error('操作失败'));

    if (appSn == 'fxgl') {
        this.setState({
            visible: true,
            appSn,
            url
        })
    } else {
        this.props.history.push(url);
    }

}


class MessageNotice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            appSn: '',
            url: ''

        }
    }

    render() {

        const rendeModal = () => {
            const {appSn,url} = this.state;
            if(appSn == 'fxgl'){
                const params = urlHandler(url);
                if (params.get("type") == '1') {
                    return <CaseDetailsModal visible={this.state.visible}
                                             ajlb={params.get("ajlb")}
                                             spcx={params.get("spcx")}
                                             ajbs={params.get("ajbs")}
                                             defaultActiveKey={params.get("defaultActiveKey")}
                                             onCancel={() => this.setState({visible: false})}
                    />
                } else if (params.get("type") == '2') {
                    return <InstrumentModal visible={this.state.visible}
                                            ajlb={params.get("ajlb")}
                                            spcx={params.get("spcx")}
                                            ajbs={params.get("ajbs")}
                                            onCancel={() => this.setState({visible: false})}
                    />;
                }
            }else {
                return null;
            }

        }

        return (
            <div>
                {rendeModal()}
                <SystemMessage imUrl="http://205.0.6.115:7070/http-bind/"
                               imServlectUrl="http://205.0.6.115:9090/"
                               serverName="rjsoft.com"
                               resource="sfgl"
                               onClickItem={msg => onClickItem.call(this, msg)}
                />
            </div>
        )

    }
}

export default withRouter(MessageNotice);
