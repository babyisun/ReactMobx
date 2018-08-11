import React from 'react';
import citys from '@/utils/city';
import { MODAL_TYPE } from '@/utils/const';
import { Input, Modal, Form, Row, Col, Cascader } from 'antd';
import styles from './../common/ModalForm.scss';

const FormItem = Form.Item;
const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 7 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 17 },
  },
};

class AgentCreateModal extends React.Component {
    onOk() {
        const { form: { validateFields }, onSubmit } = this.props;
        validateFields((err, values) => {
            if (!err) {
                console.log('form: ', values);
                if (values.location) {
                    values.province = +values.location[0];
                    if(values.location[1])values.city = +values.location[1];
                    if(values.location[2])values.county = +values.location[2];
                    delete values.location;
                }
                if (values.categories) {
                    values.category = +values.categories[0];
                    values.sub_category = +values.categories[1];
                    delete values.categories;
                }
                onSubmit && onSubmit(values);
            }
        });
    }

    render() {
        const { form: { getFieldDecorator }, modalLoading, modalVisible, modalClose, dataCategory, createType, actionType } = this.props;
        return (
            <Modal className={styles.container}
                title={`${actionType}${createType}`}
                width={560}
                visible={modalVisible}
                onOk={this.onOk.bind(this)}
                confirmLoading={modalLoading}
                // okText="创建"
                onCancel={modalClose}
                destroyOnClose={true}
            >
                <Form>
                    <div className={styles.nav}>
                        基本信息
                    </div>
                    <FormItem
                        label={`${createType}名称`}
                        {...formItemLayout}>
                        {getFieldDecorator('agent_name', {
                            rules: [{ required: true, whitespace: true, message: `请输入${createType}名称！` }]
                        })(<Input />)}
                    </FormItem>
                    <FormItem
                        {...formItemLayout}
                        label="所属地">
                        {getFieldDecorator('location', {
                            rules: [{ required: true, message: '请选择你的所属地！' }]
                        })(<Cascader
                            placeholder="选择所属地"
                            changeOnSelect
                            options={citys}
                           />
                        )}
                    </FormItem>
                    {
                        createType === MODAL_TYPE.SHOP &&
                        <FormItem
                            {...formItemLayout}
                            label="商户分类">
                            {getFieldDecorator('categories', {
                                rules: [{ required: true, message: '请选择分类！' }]
                            })(<Cascader
                                placeholder="选择所属分类"
                                options={dataCategory}
                                />
                            )}
                        </FormItem>
                    }
                    <FormItem label="主营业务" {...formItemLayout}>
                        {getFieldDecorator('main_business', {
                            rules: [{ required: true, message: '请输入主营业务！' }]
                        })(
                            <Input/>
                        )}
                    </FormItem>
                    <FormItem label="简介" {...formItemLayout}>
                        {getFieldDecorator('company_profile', {
                            rules: [{ required: true, message: '请输入简介！' }]
                        })(
                            <Input.TextArea />
                        )}
                    </FormItem>
                    <div className={styles.nav}>
                        账户信息
                    </div>
                    <FormItem label="账号名称" {...formItemLayout}>
                        {getFieldDecorator('passport_name', {
                            rules: [{ required: true, message: '请输入账号名称！' },
                            {
                                pattern: /^[a-zA-Z0-9]{1}[a-zA-Z0-9_@\.\-]{3,63}$/,
                                message: '以字母数字开头，包含_.-@的4~64位字符！'
                            }]
                        })(<Input />)}
                    </FormItem>
                    <FormItem label="联系人" {...formItemLayout}>
                        {getFieldDecorator('account_contact', {
                            rules: [{ required: true, whitespace: true, message: '请输入联系人！' }]
                        })(<Input />)}
                    </FormItem>
                    <FormItem label="地址" {...formItemLayout}>
                        {getFieldDecorator('account_address', {
                            rules: [{ required: true, message: '请输入你的地址！' }]
                        })(<Input />)}
                    </FormItem>
                    <FormItem label="手机" {...formItemLayout}>
                        {getFieldDecorator('account_phone', {
                            rules: [{
                                required: true,
                                message: '请输入手机号码！'
                            }, {
                                pattern: /^1[3|4|5|7|8][0-9]{9}$/,
                                message: '输入手机号码格式不正确！'
                            }],
                            validateTrigger: 'onBlur',
                        })(<Input />)}
                    </FormItem>
                    <FormItem label="邮箱" {...formItemLayout}>
                        {getFieldDecorator('account_email', {
                            rules: [{
                                required: true, message: '请输入你的邮箱！',
                            }, {
                                type: 'email',
                                message: '输入邮箱格式不正确！',
                            }],
                            validateTrigger: 'onBlur'
                        })(<Input />)}
                    </FormItem>
                    <FormItem label="其他信息" {...formItemLayout}>
                        {getFieldDecorator('account_other_info')(
                            <Input.TextArea />)}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

export default Form.create()(AgentCreateModal);
