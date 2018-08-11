import React from 'react';
import { observer, inject } from "mobx-react";
import { Button, Modal, Select, Form, Row, Col, Input, Cascader} from 'antd';
import Launcher from '@/components/common/Launcher';
import styles from './editModal.scss';
  
const FormItem = Form.Item;

@inject("agentL2")
@observer class ModalForm extends React.Component {

    state = {
        operateStatus: ''
    }

    // 驳回
    handleReject() {
        let store = this.props.agentL2;
        this.props.form.validateFields((err, values) => {
            if (!err) {
                values.agent_id = store.merchantInfo.agent_id;
                values.status = 3;
                store.onAudit(values)
                store.setModalVisible(false);
            }
        });
    }
    // 单纯退出
    handleOk() {
        this.props.agentL2.setModalVisible(false);
    }
    // 通过
    handlePass() {
        let store = this.props.agentL2;
        let values = {};
        values.agent_id = store.merchantInfo.agent_id;
        values.status = 1;
        store.onAudit(values)
        store.setModalVisible(false);
        store.setModalVisible(false);
    }
    // 取消
    handleCancel() {
        this.props.agentL2.setModalVisible(false);
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        const store = this.props.agentL2;
        // 商户信息 
        const  merchantInfo = store.merchantInfo
        return (
            <Modal 
                title={store.modalType ===  'Auditing' ? `审核${store.modalTitle}` : `查看${store.modalTitle}` }
                visible={store.modalShow}
                style={{top: 65}}
                bodyStyle={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 20, paddingRight: 20 }}
                onOk={this.handleOk.bind(this)}
                okText="提交审核"
                footer={
                    <div className={styles.buttonBox}>
                        {store.modalType != 'Auditing' ? '':(
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
                { this.props.agentL2.detailLoading ? <Launcher loading noCircle /> : <Form 
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
                                            <span className={styles.text}>{merchantInfo.agent_name ? merchantInfo.agent_name : ''}</span>
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
                                    <div><span className={styles.text}>{merchantInfo.passport_name ? merchantInfo.passport_name : ''}</span></div>
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
                                        {store.modalType === 'AuditingCheck'? (
                                            <FormItem 
                                                className={styles.formItem}
                                                style={{marginBottom: 10}}
                                                label="审核意见">
                                                    <div><span className={styles.text}>{merchantInfo.audit_advice ? merchantInfo.audit_advice : ''}</span></div>
                                            </FormItem>
                                        ) : <div></div>}
                                        {store.modalType === 'Auditing' ? (
                                            <div>
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
                    ) :(<div className={styles.formBox}>
                            <Row type="flex" justify="start">
                                <Col span={24}>
                                    <FormItem label="初始密码"  className={styles.formItem}>
                                        <div><span className={styles.text}>{merchantInfo.initial_password ? merchantInfo.initial_password : ''}</span></div>
                                    </FormItem>
                                </Col>
                            </Row>
                        </div>)}
                    </div>
                </Form>
                }
            </Modal>
        )
    }
}

const AgentL2Modal = Form.create()(ModalForm);
export default AgentL2Modal;
