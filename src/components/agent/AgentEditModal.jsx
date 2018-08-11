import React from 'react';
import { observer, inject } from "mobx-react";
import { Input, Button, message, Modal, Select, Form, Row, Col, Cascader } from 'antd';
import citys from '@/utils/city';
import styles from './AgentEditModal.scss';

const FormItem = Form.Item;
const Option = Select.Option;


@inject("agentL2")
@observer  class ModalForm extends React.Component {


    componentWillMount() {
        console.log(this.props.agentL2)
    }

    // modal确定
    handleOk(e) {
      e.preventDefault;
      this.props.form.validateFields((err, values) => {
          if (!err) {
              // value是表单value
              console.log('Received values of form: ', values);
              // this.props.modalClose()
          }
      });
    }
    // modal取消
    handleCancel() {
        this.props.modalClose()
    }



    render() {
        const { getFieldDecorator } = this.props.form;
        const store = this.props.agentL2;
        // 商户信息 
        const  merchantInfo = this.props.modalContent ? this.props.modalContent.merchantInfo[0] : {}
        return (
            <Modal
                title={this.props.modalInfo.title}
                visible={this.props.modalVisible}
                style={{ top: 5 }}
                bodyStyle={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}
                onOk={this.handleOk.bind(this)}
                footer={
                    <div className={styles.buttonBox}>
                        <Button type="primary" onClick={this.handleOk.bind(this)}>{this.props.modalInfo.buttonText}</Button>
                    </div>
                }
                onCancel={this.handleCancel.bind(this)}
                destroyOnClose={true}
            >
                <Form
                    layout="inline">
                    <div className={styles.subTitle}>
                        基本信息
                    </div>
                    <div className={styles.formBox}>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    label="商户名称"
                                    className={styles.formItem}>
                                    {getFieldDecorator('merchantName', {
                                        rules: [{ required: true, message: '请输入商户名称！' }],
                                        initialValue: merchantInfo.agent_name ? merchantInfo.agent_name : ''
                                    })(
                                        <div>
                                            <Input defaultValue={merchantInfo.agent_name ? merchantInfo.agent_name : ''}/>
                                        </div>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    className={styles.formItem}
                                    label="所属地">
                                    {getFieldDecorator('location', {
                                        rules: [{ required: true, message: '请输入你的所属地！' }],
                                        initialValue: merchantInfo.province && merchantInfo.city && merchantInfo.county ? [merchantInfo.province, merchantInfo.city, merchantInfo.county] : []
                                    })(<Cascader
                                        options={citys}
                                        style={{ width: 250 }}
                                        className={styles.eleLeft} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    className={styles.formItem}
                                    label="商户分类">
                                    {getFieldDecorator('class', {
                                        rules: [{ required: true, message: '商户分类不能为空！' }],
                                        initialValue: ["01", "01001"]
                                    })(<Cascader
                                        options={store.merchantType}
                                        style={{ width: 250 }}
                                        className={styles.eleLeft} />
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    className={styles.formItem}
                                    label="主营业务">
                                    {getFieldDecorator('work', {
                                        rules: [{ required: true, message: '请输入主营业务！' }],
                                        initialValue: merchantInfo.main_business ? merchantInfo.main_business:''
                                    })(<div>
                                        <Input
                                            size="small"
                                            defaultValue={merchantInfo.main_business ? merchantInfo.main_business:''} />
                                        </div>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    className={styles.formItem}
                                    label="账户简介">
                                    {getFieldDecorator('brief', {
                                        rules: [{ required: true, message: '请输入账户简介！' }],
                                        initialValue: merchantInfo.company_profile ? merchantInfo.company_profile:''
                                    })(<div>
                                        <Input.TextArea
                                            size="small"
                                            style={{ width: 300, height: 35, marginTop: 5 }}
                                            defaultValue={merchantInfo.company_profile ? merchantInfo.company_profile:''}/>
                                    </div>)}
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.subTitle}>
                        账户信息
                    </div>
                    <div className={styles.formBox}>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    label="账号名称"
                                    className={styles.formItem}>
                                    {getFieldDecorator('accountName', {
                                        rules: [{ required: true, message: '请输入账号名称！' }],
                                        initialValue: merchantInfo.passport_name ? merchantInfo.passport_name:''
                                    })(
                                        <div>
                                            <Input  defaultValue={merchantInfo.passport_name ? merchantInfo.passport_name:''}/>
                                            </div>
                                    )}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    className={styles.formItem}
                                    label="联系人">
                                    {getFieldDecorator('contacts', {
                                        rules: [{ required: true, message: '请输入联系人！' }],
                                        initialValue: merchantInfo.account_contact ? merchantInfo.account_contact:''
                                    })(<div>
                                        <Input defaultValue={merchantInfo.account_contact ? merchantInfo.account_contact:''}/>
                                    </div>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    className={styles.formItem}
                                    label="地址">
                                    {getFieldDecorator('address', {
                                        rules: [{ required: true, message: '请输入你的地址！' }],
                                        initialValue: merchantInfo.account_address ? merchantInfo.account_address:''
                                    })(<div><Input defaultValue={merchantInfo.account_address ? merchantInfo.account_address:''}/></div>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    className={styles.formItem}
                                    label="电话">
                                    {getFieldDecorator('phone', {
                                        rules: [{
                                            pattern: /((\d{11})|^((\d{7,8})|(\d{4}|\d{3})-(\d{7,8})|(\d{4}|\d{3})-(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1})|(\d{7,8})-(\d{4}|\d{3}|\d{2}|\d{1}))$)/,
                                            message: '输入电话号码格式不正确！'
                                        }, {
                                            required: true,
                                            message: '请输入你的电话号码！'
                                        }],
                                        validateTrigger: 'onBlur',
                                        initialValue: merchantInfo.account_phone ? merchantInfo.account_phone:''
                                    })(<div><Input size="small"  defaultValue={merchantInfo.account_phone ? merchantInfo.account_phone:''}/></div>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    className={styles.formItem}
                                    label="邮箱">
                                    {getFieldDecorator('email', {
                                        rules: [{
                                            type: 'email',
                                            message: '输入邮箱格式不正确！',
                                        }, {
                                            required: true, message: '请输入你的邮箱！',
                                        },],
                                        validateTrigger: 'onBlur',
                                        initialValue: merchantInfo.account_email ? merchantInfo.account_email:''
                                    })(<div><Input size="small" defaultValue={merchantInfo.account_email ? merchantInfo.account_email:''}/></div>)}
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem
                                    className={styles.formItem}
                                    label="其他信息">
                                    {getFieldDecorator('description', {
                                        initialValue: merchantInfo.account_other_info ? merchantInfo.account_other_info:''
                                    })(
                                        <div>
                                            <Input.TextArea
                                                size="small"
                                                defaultValue={merchantInfo.account_other_info ? merchantInfo.account_other_info:''}
                                                style={{ width: 300, height: 35 }}
                                            />
                                        </div>)}
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                </Form>
            </Modal>
        )
    }
}

const AgentEditModal = Form.create()(ModalForm);
export default AgentEditModal;
