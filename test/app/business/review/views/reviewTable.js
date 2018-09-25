import React, {Component} from 'react';
import Icon from 'rjd/icon';
import Space from 'rjd/space';
import Table from 'rjd/table';
import Scroll from 'rjd/scroll';
import Popconfirm from 'rjd/popconfirm';
import Pagination from 'rjd/pagination';

import '../style/index.less';
import {prefix} from "../../../classNamePrefix";
import ReviewTableData from "./reviewTable.json";

const stylePrefix = prefix + '-review-table';

class ReviewTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            data: ReviewTableData.data,//[]
            selectedRowKeys: []
        };
    }

    defaultPage = {
        current: 1,
        pageSize: 10,
        total: 500,
        showSizeChanger: true,
        onShowSizeChange: this.onShowSizeChange,
    };

    columns = [
        {
            "title": "序号",
            "key": "xh",
            "dataIndex": "xh"
        },
        {
            "title": "审批材料",
            "key": "spcl",
            "dataIndex": "spcl",
            "className": stylePrefix + "-column-primary"
        },
        {
            "title": "案号",
            "key": "ah",
            "dataIndex": "ah",
            "className": stylePrefix + "-column-primary"
        },
        {
            "title": "来源",
            "key": "ly",
            "dataIndex": "ly"
        },
        {
            "title": "审批人",
            "key": "spr",
            "dataIndex": "spr"
        },
        {
            "title": "状态",
            render: (text, record) => {
                let className = stylePrefix+'-column';
                if (record.zt === "未审批") {
                    className += "-wsp"
                } else {
                    className += "-ysp"
                }
                return (
                    <span className={className}>
                        {record.zt}
                    </span>
                )

            }
        },
        {
            "title": "提请日期",
            "key": "tqrq",
            "dataIndex": "tqrq"
        }, {
            title: '操作',
            "className": stylePrefix + "-column-center",
            render: (text, record) => {
                if (record.ly === "发起" && record.zt === "未审批") {
                    return (
                        <div>
                            <a href="javascript:void(0);"
                               onClick={() => this.handleShow(record)}>
                                查看
                            </a>
                            <Space/>
                            <Popconfirm title="确定撤销吗？" onConfirm={() => this.handleCancel(record)}>
                                <a href="javascript:void(0);" className="ant-dropdown-link">
                                    撤销
                                </a>
                            </Popconfirm>

                        </div>
                    )
                } else if (record.ly === "收到") {
                    return (
                        <a href="javascript:void(0);"
                           onClick={() => this.handleShow(record)}>
                            查看
                        </a>
                    );

                }

            }
        }];

    handleShow = (record) => {

    };

    handleCancel = (record) => {

    };

    onShowSizeChange = (current, pageSize) => {

    };

    onSelectChange = (selectedRowKeys) => {
        this.setState({selectedRowKeys: selectedRowKeys});

    };

    render() {
        const {loading, data} = this.state;
        const {offsetTop} = this.props;
        const rowSelection = {
            // selectedRowKeys,
            onChange: this.onSelectChange,
        };

        return (
            <Scroll className={stylePrefix} style={{top: offsetTop + 152}}>
                <Table
                    size="middle"
                    rowKey={record => record.xh}
                    className={stylePrefix + "-content"}
                    pagination={false}
                    columns={this.columns}
                    loading={loading}
                    dataSource={data}
                    rowSelection={rowSelection}/>
                <div className={stylePrefix + '-bottom'}>
                    <Pagination {...this.defaultPage}/>
                </div>
            </Scroll>
        )
    }
}

export default ReviewTable;