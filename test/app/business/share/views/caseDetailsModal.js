/**
 * Created by Administrator on 2018/6/5.
 */
import React from "react";
import Modal from "rjd/modal";
import Details from "court-case-on-file/details";

export default ({visible,ajlb,spcx,ajbs,defaultActiveKey,onCancel}) => {

    return (
        <Modal
            title='案件详情'
            visible={visible}
            footer={null}
            onCancel={onCancel}
            width='100%'
            style={{height:'100%',top:0}}
            mod='scrollInline'
            destroyOnClose={true}
        >
            <Details record={{
                ajlb,
                spcx,
                ajbs,
                defaultActiveKey,
            }} />
        </Modal>
    );

}