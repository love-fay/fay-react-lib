import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import "../style/index.less";
import {prefix} from "../../../classNamePrefix";
import ShareListPanel from "court-share/components/courtSharing/listPanel";
import CaseDetailsModal from './caseDetailsModal'
import InstrumentModal from './instrumentModal'

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

function onClickItem(item){
    if (item.type == 'AJ' || item.type == 'WS') {
        ;
        this.setState({visible: true, clickedItem: item});
    } else {
        this.props.history.push(item.url);
    }
};


class Share extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            clickedItem: {},
        };
    }

    render() {
        const stylePrefix = prefix + '-share';
        const server = "http://205.0.3.94:5555/courtSharing/v1";

        const rendeModal = () => {
            const {clickedItem} = this.state;
            const params = urlHandler(clickedItem.url);
            if (clickedItem.type == 'AJ') {
                return <CaseDetailsModal visible={this.state.visible}
                                         ajlb={params.get("ajlb")}
                                         spcx={params.get("spcx")}
                                         ajbs={params.get("ajbs")}
                                         defaultActiveKey={params.get("defaultActiveKey")}
                                         onCancel={() => this.setState({visible: false})}
                />
            } else if (clickedItem.type == 'WS') {
                return <InstrumentModal visible={this.state.visible}
                                        ajlb={params.get("ajlb")}
                                        spcx={params.get("spcx")}
                                        ajbs={params.get("ajbs")}
                                        onCancel={() => this.setState({visible: false})}
                />;
            }
        }

        return (

            <div className={stylePrefix}>
                {rendeModal()}
                <ShareListPanel server={server} onClickItem={item =>onClickItem.call(this,item)}/>
            </div>
        )
    }
}

export default withRouter(Share);