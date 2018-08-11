import React from 'react';
import { observer, inject } from "mobx-react";
import { Input, Modal, Form, Row, Col, Select } from 'antd';
import styles from './Modal.scss';

const FormItem = Form.Item;
const Option = Select.Option;

@inject("purchase")
@observer class PurchaseModal extends React.Component {
    onOk() {
        const { form: { validateFields }, onSubmit } = this.props;
        validateFields((err, values) => {
            if (!err) {
                console.log('form: ', values);
                onSubmit && onSubmit(values);
            }
        });
    }

    render() {
        const { form: { getFieldDecorator }, modalLoading, modalVisible, modalClose } = this.props;
        const store = this.props.purchase
        return (
            <Modal className={styles.modalForm}
                title="创建一级代理商"
                width={560}
                visible={modalVisible}
                onOk={this.onOk.bind(this)}
                confirmLoading={modalLoading}
                okText="创建"
                onCancel={modalClose}
                destroyOnClose={true}
            >
                <Form layout="inline">
                    <div className={styles.subTitle}>
                        基本信息
                    </div>
                    <div className={styles.formBox}>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    label="二级代理商ID"
                                    className={styles.formItem}>
                                    {getFieldDecorator('agent_ids', {
                                        rules: [{ required: true, message: '请输入代理商ID！', whitespace: true }]
                                    })(<Input />)}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    label="套餐类型"
                                    className={styles.formItem}>
                                    {getFieldDecorator('package_id', {
                                        rules: [{ required: true, message: '请输入套餐类型！' }],
                                        initialValue: "0"
                                    })(
                                        <Select style={{ width: 120 }}>
                                            <Option value="0">全部</Option>
                                            {
                                            this.props.purchase.dataPackageOption.length
                                            && this.props.purchase.dataPackageOption.map(item =>
                                                <Option key={item.package_id} value={item.package_id}>{item.package_name}</Option>
                                            )
                                            }
                                      </Select>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    label="数量"
                                    className={styles.formItem}>
                                    {getFieldDecorator('merchantName', {
                                        rules: [{ required: true, message: '请输入代理商数量！', whitespace: true }]
                                    })(<Input />)}
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(PurchaseModal);
