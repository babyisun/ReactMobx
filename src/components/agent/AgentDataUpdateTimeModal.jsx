import React from 'react';
import { observer, inject } from "mobx-react";
import { DatePicker, Modal, Form, Row, Col } from 'antd';
//plugin引用
import moment from 'moment';

const FormItem = Form.Item;


@inject("agentData")
@observer class ModalForm extends React.Component {
    // modal确定
    handleOk() {
        const { form: { validateFields }, agentData: store } = this.props;
        validateFields((err, values) => {
            if (!err) {
                store.onUpdateTime(values.time.format("YYYY-MM-DD"));
            }
        });
    }

    render() {
        const { form: { getFieldDecorator }, agentData: store } = this.props;
        if (!store.currRow)
            return null;
        else
            return (
                <Modal
                    title="修改套餐到期时间"
                    visible={store.updateTimeVisable}
                    onOk={this.handleOk.bind(this)}
                    onCancel={() => store.setUpdateTimeVisableChange(false)}
                    confirmLoading={store.updateTimeLoading}
                    destroyOnClose
                >
                    <Form layout="inline">
                        <Row>
                            <Col span={24}>
                                <FormItem label="店铺ID">
                                    {store.currRow.shop_id}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <FormItem label="店铺名称">
                                    {store.currRow.shop_name}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                                <FormItem label="到期时间">
                                    {getFieldDecorator('time', {
                                        rules: [{ required: true, message: '请输入日期' }],
                                        initialValue: store.currRow ? moment.unix(store.currRow.package_end_time) : moment()
                                    })(
                                        <DatePicker />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                    </Form>
                </Modal>
            )
    }
}

const AgentDataUpdateTimeModal = Form.create()(ModalForm);
export default AgentDataUpdateTimeModal;
