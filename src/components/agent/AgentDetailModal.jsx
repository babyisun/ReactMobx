import React from 'react';
// import { observer, inject } from "mobx-react";
import { Modal, Form, Row, Col } from 'antd';
import { MODAL_TYPE } from '@/utils/const';
import Launcher from '@/components/common/Launcher';
import styles from './DetailModal.scss';

const FormItem = Form.Item;

class AgentDetailModal extends React.Component {
    render() {
        const { modalLoading, modalVisible, modalClose, data, createType, actionType } = this.props;
        // 商户信息 
        return (
            <Modal
                title={`${actionType}${createType}`}
                visible={modalVisible}
                onCancel={modalClose}
                destroyOnClose={true}
                footer={null}
            >
                {
                    modalLoading ? <Launcher loading noCircle /> :
                        <Form
                            layout="inline">
                            <div className={styles.subTitle}>
                                基本信息
                            </div>
                            <div className={styles.formBox}>
                                <Row type="flex" justify="start">
                                    <Col span={24}>
                                        <FormItem
                                            label={`${createType}名称`}>
                                            <div>
                                                <span className={styles.text}>{data[createType === MODAL_TYPE.SHOP ? "agent_name" : "first_agent_name"]}</span>
                                            </div>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col span={24}>
                                        <FormItem
                                            label="所属地">
                                            <div>
                                                <span className={styles.text}>
                                                    {
                                                        data.address && `${data.address.province_name ? data.address.province_name : ""}${data.address.city_name ? "-" + data.address.city_name : ""}${data.address.county_name ? "-" + data.address.county_name : ""}`
                                                    }
                                                </span>
                                            </div>
                                        </FormItem>
                                    </Col>
                                </Row>
                                {
                                    createType === MODAL_TYPE.SHOP &&
                                    <Row type="flex" justify="start">
                                        <Col span={24}>
                                            <FormItem
                                                label="商户分类">
                                                <div>
                                                    <span className={styles.text}>
                                                        {
                                                            data.category && data.category
                                                        }
                                                    </span>
                                                </div>
                                            </FormItem>
                                        </Col>
                                    </Row>
                                }
                                <Row type="flex" justify="start">
                                    <Col span={24}>
                                        <FormItem
                                            label="主营业务">
                                            <div>
                                                <span className={styles.text}>{data.main_business}</span>
                                            </div>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col span={24}>
                                        <FormItem
                                            label="账户简介">
                                            <div>
                                                <span className={styles.text}>{data.company_profile}</span>
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
                                        <FormItem label="账号名称">
                                            <div><span className={styles.text}>{data.passport_name}</span></div>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col span={24}>
                                        <FormItem label="联系人">
                                            <div><span className={styles.text}>{data.account_contact}</span></div>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col span={24}>
                                        <FormItem label="地址">
                                            <div><span className={styles.text}>{data.account_address}</span></div>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col span={24}>
                                        <FormItem label="电话">
                                            <div><span className={styles.text}>{data.account_phone}</span></div>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col span={24}>
                                        <FormItem label="邮箱">
                                            <div><span className={styles.text}>{data.account_email}</span></div>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <Row type="flex" justify="start">
                                    <Col span={24}>
                                        <FormItem label="其他信息">
                                            <div><span className={styles.text}>{data.account_other_info}</span></div>
                                        </FormItem>
                                    </Col>
                                </Row>
                                <div>
                                    <div className={styles.subTitle}>
                                        账号信息
                                    </div>
                                    <div className={styles.formBox}>
                                        <Row type="flex" justify="start">
                                            <Col span={24}>
                                                <FormItem label="初始密码">
                                                    <div><span className={styles.text}>{data.initial_password}</span></div>
                                                </FormItem>
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                            </div>
                        </Form>
                }
            </Modal>
        )
    }
}

export default Form.create()(AgentDetailModal);
