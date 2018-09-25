/**
 * Created by Administrator on 2018/6/5.
 */
import React from "react";
import Modal from "rjd/modal";
import Instrument from "court-case-on-file/instrument";

export default ({visible,ajlb,spcx,ajbs,onCancel}) => {

    return (
        <Modal
            title='文书编辑'
            visible={visible}
            footer={null}
            onCancel={onCancel}
            width='100%'
            style={{height:'100%',top:0}}
            mod='scrollInline'
            destroyOnClose={true}
        >
            <Instrument record={{
                ajlb,
                spcx,
                ajbs,
            }} offsetTop={50} />
        </Modal>
    );

}