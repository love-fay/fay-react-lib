/**
 * Created by Administrator on 2018/5/17.
 */
import React from 'react';
import Modal from 'rjd/modal'
import Card from 'rjd/card'
import {withRouter} from "react-router-dom";

export default withRouter(({history,flag,onCancel}) => {

    const types = flag.split("-");
    const content = (types) => {
        if(types.length == 2){
            if(types[0] === "fang"){
                if(types[1] === "xfdj" ){

                }
            }else if(types[0] === "li"){
                if(types[1] === "lasp" ){
                    history.push("/case-on-file", null);
                }else if(types[1] === "sadj"){
                    return (
                        <Modal
                            title="快捷入口"
                            visible={true}
                            onCancel={onCancel}
                            maskClosable={false}
                            mask={false}
                            footer={null}
                            width={800}
                        >
                            <Card title="收案登记"
                                  style={{height: "100%"}}
                                  bodyStyle={{padding: 20, height: "calc(100% - 50px)"}}
                                  bordered={true}
                            >
                                敬请期待！
                            </Card>
                        </Modal>
                    );
                }
            }
        }

        return null;
    };

    return (
        <div>
            {content(types)}
        </div>
    );
})