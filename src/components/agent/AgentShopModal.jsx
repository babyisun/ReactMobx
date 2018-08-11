import React from 'react';
import { observer, inject } from "mobx-react";
import { Button, Modal, Select, Form, Row, Col, Input, Cascader} from 'antd';
import styles from './editModal.scss';
  
const FormItem = Form.Item;

@inject("agentShop")
@observer class ModalForm extends React.Component {

    state = {
        operateStatus: ''
    }

    componentWillMount() {
        console.log("getUser", this.props.agentShop.getUser());
    }

    // 驳回
    handleReject() {
        let store = this.props.agentShop;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.merchant_id = store.merchantInfo.merchant_id;
                // 0代表驳回
                values.is_pass = 0;
                store.onAudit(values);
                store.setModalVisible(false);
            }
        });
    }
    // 单纯退出
    handleOk() {
        this.props.agentShop.setModalVisible(false);
    }
    // 通过
    handlePass() {
        let store = this.props.agentShop;
        let values = {};
        values.merchant_id = store.merchantInfo.merchant_id;
        // 1代表通过
        values.is_pass = 1;
        store.onAudit(values)
        store.setModalVisible(false);
        this.props.agentShop.setModalVisible(false);
    }
    // 取消
    handleCancel() {
        this.props.agentShop.setModalVisible(false);
    }
    getOperateStatus() {
        if (this.props.agentShop.modalType === 'Auditing') {
            return '审核'
            
        } else {
            return '查看'
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const store = this.props.agentShop;
        // 商户信息 
        const  merchantInfo = store.merchantInfo
        return (
            <Modal 
                title={store.modalType ===  'Auditing' ? `审核${store.modalTitle}` : `查看${store.modalTitle}` }
                visible={store.modalShow}
                style={{ top: 80 }}
                bodyStyle={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}
                onOk={this.handleOk.bind(this)}
                okText="提交审核"
                footer={
                    <div className={styles.buttonBox}>
                        {store.modalType != 'Auditing' ? '' : (
                            <div>
                                <Button type="primary" onClick={this.handleReject.bind(this)}>驳回</Button>
                                <Button type="primary" onClick={this.handlePass.bind(this)}>通过</Button>
                            </div>
                        )}
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
                                    label={`${store.modalTitle}名称`}
                                    className={styles.formItem}>
                                        <div>
                                            <span className={styles.text}>{merchantInfo.merchant_name ? merchantInfo.merchant_name : ''}</span>
                                        </div>
                                </FormItem>
                            </Col>
                        </Row> 
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem 
                                    className={styles.formItem}
                                    label="所属地">
                                    <div>
                                        <span className={styles.text}>
                                            {
                                                merchantInfo.address && `${merchantInfo.address.province_name ? merchantInfo.address.province_name  : ""}${merchantInfo.address.city_name ? "-" + merchantInfo.address.city_name : ""}${merchantInfo.address.county_name ? "-" + merchantInfo.address.county_name : ""}`
                                            }
                                        </span>
                                    </div>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem 
                                    className={styles.formItem}
                                    label="主营业务">
                                    <div>
                                        <span className={styles.text}>{merchantInfo.main_business ? merchantInfo.main_business : ''}</span>
                                    </div>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem 
                                    className={styles.formItem}
                                    label="商户分类">
                                    <div><span className={styles.text}>{merchantInfo.category ? merchantInfo.category : ''}-{merchantInfo.sub_category ? merchantInfo.sub_category : ''}</span></div>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem 
                                    className={styles.formItem}
                                    label="账户简介">
                                     <div>
                                        <span className={styles.text}>{merchantInfo.company_profile ? merchantInfo.company_profile : ''}</span>
                                    </div>
                                </FormItem>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.subTitle}>
                        账号信息
                    </div>
                    <div className={styles.formBox}>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem 
                                    label="账号名称"
                                    className={styles.formItem}>
                                    <div><span className={styles.text}>{merchantInfo.account_name ? merchantInfo.account_name : ''}</span></div>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem 
                                    className={styles.formItem}
                                    label="联系人">
                                    <div><span className={styles.text}>{merchantInfo.account_contact ? merchantInfo.account_contact : ''}</span></div>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem 
                                    className={styles.formItem}
                                    label="地址">
                                    <div><span className={styles.text}>{merchantInfo.account_address ? merchantInfo.account_address : ''}</span></div>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem 
                                    className={styles.formItem}
                                    label="电话">
                                    <div><span className={styles.text}>{merchantInfo.account_phone ? merchantInfo.account_phone : ''}</span></div>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem 
                                    className={styles.formItem}
                                    label="邮箱">
                                    <div><span className={styles.text}>{merchantInfo.account_email ? merchantInfo.account_email : ''}</span></div>
                                </FormItem>
                            </Col>
                        </Row>
                        <Row type="flex" justify="start">
                            <Col span={24}>
                                <FormItem 
                                    className={styles.formItem}
                                    label="其他信息">
                                    <div><span className={styles.text}>{merchantInfo.account_other_info ? merchantInfo.account_other_info : ''}</span></div>
                                </FormItem>
                            </Col>
                        </Row>
                        <div className={styles.subTitle}>账号信息</div>
                        {store.modalType != 'freeze' ? 
                        (<div className={styles.formBox}>
                            <Row type="flex" justify="start">
                                <Col span={24}>
                                    <div >
                                        {store.modalType == 'AuditingCheck'? (
                                            <FormItem 
                                                className={styles.formItem}
                                                style={{marginBottom: 10}}
                                                label="审核意见">
                                                    <div><span className={styles.text}>{merchantInfo.audit_advice ? merchantInfo.audit_advice : ''}</span></div>
                                            </FormItem>
                                        ) : <div></div>}
                                        {store.modalType == 'Auditing' ? (
                                            <div>
                                                {/* <span className={styles.label}>审核意见</span> */}
                                                <FormItem 
                                                    className={styles.formItem}
                                                    style={{marginBottom: 10}}
                                                    label="审核意见">
                                                    {getFieldDecorator('audit_advice', {
                                                        rules: [{ required: true, message: '驳回时审核意见必填！', whitespace: true }]
                                                    })( 
                                                        <Input.TextArea placeholder="请输入审核意见"  className={styles.textInput} />
                                                    )}
                                                </FormItem>
                                            </div> 
                                        ): null}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        ) : (<div className={styles.formBox}>
                            <Row type="flex" justify="start">
                                <Col span={24}>
                                    <FormItem label="初始密码" className={styles.formItem}>
                                        <div><span className={styles.text}>{merchantInfo.initial_password ? merchantInfo.initial_password : ''}</span></div>
                                    </FormItem>
                                </Col>
                            </Row>
                        </div>)}
                    </div>
                </Form>
            </Modal>
        )
    }
}

const AgentShopModal = Form.create()(ModalForm);
export default AgentShopModal;
