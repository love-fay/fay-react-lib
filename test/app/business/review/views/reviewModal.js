import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Modal from 'rjd/modal';
import Button from 'rjd/button';
import '../style/index.less';
import {prefix} from "../../../classNamePrefix";


class ReviewModal extends Component {

    state = {visible: false};

    showModal = (record) => {
        console.log('showModal', record);
        this.setState({visible: true})
    };

    handleCancel = (e) => {
        this.setState({visible: false})
    };


    render() {
        const stylePrefix = prefix + '-review-modal';
        return (
            <span>
                <Button type="primary" onClick={() => this.showModal(this.props.record)} className={stylePrefix+'-button'}>审批</Button>
                <Modal onCancel={this.handleCancel} visible={this.state.visible} className={stylePrefix} title="审批" footer="">
                    <div style={{textAlign: 'center'}}>
                        <img src="/assets/images/review/sp.jpg" className={stylePrefix+"-image"}/>
                    </div>
                </Modal>
            </span>
        )
    }
}

export default ReviewModal;