import React, { Component, Fragment } from 'react'
import { Form, Input, Cascader, Button, Modal, Select, DatePicker, InputNumber} from "antd";
import styles from './ModalForm.scss';
import citys from '@/utils/city';

const FormItem = Form.Item;
const { Option } = Select;
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

class ModelForm extends Component {
  handleSubmit = () => {
    const { form: { validateFields }, onSubmit } = this.props;
    validateFields((err, values) => {
      if (!err) {
        onSubmit && onSubmit(values);
      }
    });
  }
  render() {
    const { form: { getFieldDecorator }, loading, visible, modalClose, setting, formData, action, secondAgentId } = this.props;
    const {itemInfo} = setting;
    const renderOption = () => {
      let OptionDom = [];
      for(let i = 0; i < 10; i++) {
        OptionDom.push(<Option value={i} key={i}>{i}</Option>);
      }
      return OptionDom;
    }
    const checkIdNum = (rule, value, callback) => {
      value && value.length > 20 && callback('只能选择20个二代ID')
    }
    const renderFormItem = (type, value, actionName, formInfo) => {
      let AreaName = '', AreaCode = [];
      if (formInfo && formInfo.address) {
        const address = formInfo.address;
        AreaName = `${address.province_name}${address.city_name}${address.county_name}`;
        AreaCode = [`${address.province_code}`, `${address.city_code}`, `${address.county_code}`];
      }
      switch (type) {
        case '所属地':
          if (actionName === '创建') {
            return (
              getFieldDecorator(value, {
              rules: [{ required: true, message: '请选择所属地' }],
              })(
                <Cascader options={citys} changeOnSelect placeholder="请选择所属地" />
              )
            )
          } else if (actionName === '编辑') {
            return (
              getFieldDecorator(value, {
              rules: [{ required: true, message: '请选择所属地' }],
              initialValue: AreaCode
              })(
                <Cascader options={citys} placeholder="请选择所属地" />
              )
            )
          } else {
            return (
              <div className={styles.text}>
                {AreaName}
              </div>
            )
          }
        case '电话':
          if (actionName === '创建') {
            return (
              getFieldDecorator(value, {
                rules: [{
                  required: true, message: '请输入手机号',
                }, {
                  pattern: /^1[3|4|5|7|8][0-9]{9}$/,
                  message: '输入手机号格式不正确'
                }]
              })(
                <Input placeholder="请输入手机号"/>
              )
            )
          } else if(actionName === '编辑') {
            return (
              getFieldDecorator(value, {
                rules: [{
                  required: true, message: '请输入手机号'
                }, {
                  pattern: /^1[3|4|5|7|8][0-9]{9}$/,
                  message: '输入手机号格式不正确'
                }],
                initialValue: formInfo && formInfo[value]
              })(
                <Input placeholder="请输入手机号"/>
              )
            )
          } else {
            return (
              <div className={styles.text}>{formInfo && formInfo.account_phone}</div>
            )
          }
        case '邮箱':
          if (actionName === '创建') {
            return (
              getFieldDecorator(value, {
                rules: [{
                  required: true, message: '请输入邮箱'
                }, {
                  type: 'email', message: '输入邮箱格式不正确'
                }]
              })(
                <Input placeholder="请输入邮箱"/>
              )
            )
          } else if (actionName === '编辑') {
            return (
              getFieldDecorator(value, {
                rules: [{
                  required: true, message: '请输入邮箱'
                }, {
                  type: 'email', message: '输入邮箱格式不正确'
                }],
                initialValue: formInfo && formInfo[value]
              })(
                <Input placeholder="请输入邮箱"/>
              )
            )
          } else {
            return (
              <div className={styles.text}>{formInfo && formInfo.account_email}</div>
            )
          }
        case '折扣':
          return (
            getFieldDecorator('discount', {
              rules: [{
                required: true, message: '请选择折扣'
              }],
            })(
              <Select placeholder="请选择折扣">
                {renderOption()}
              </Select>
            )
          )
        case '账号名称':
          if (actionName === '编辑') {
            return (
              getFieldDecorator(value, {
                rules: [{ required: true, message: '请输入账号名称' }],
                initialValue: formInfo && formInfo[value]
              })(
                <Input disabled/>
              )
            )
          } else if (actionName === '创建') {
            return (
              getFieldDecorator(value, {
                rules: [{ required: true, message: '请输入账号名称' }]
              })(
                <Input placeholder="请输入其他信息"/>
              )
            )
          } else {
            <div className={styles.text}>{formInfo && formInfo.passport_name}</div>
          }
        case '其他信息':
        case '套餐描述':
        case '套餐功能':
          if (actionName === '创建') {
            return (
              getFieldDecorator(value)(
                <Input.TextArea placeholder={`请输入${type}`} />
              )
            )
          } else if (actionName === '编辑') {
            return (
              getFieldDecorator(value, {initialValue: formInfo && formInfo[value]})(
                type === '套餐功能' ?
                <Input.TextArea placeholder={`请输入${type}`} rows={8} disabled /> :
                <Input.TextArea placeholder={`请输入${type}`} rows={5}/>
              )
            )
          } else {
            return (
              <div className={styles.text}>{formInfo && formInfo[value]}</div>
            )
          }
        case '套餐价格':
          let price = formInfo && (formInfo.price / 100).toFixed(2);
          return (
            getFieldDecorator('price', {
              rules: [{ type: 'number', message: '请输入数字' }],
              initialValue: price
            })(
              <InputNumber
                style={{ width: '100%' }}
                formatter={value => `¥${value}`}
                precision={2}
                parser={value =>  value.replace('¥','')}
              />
            )
          )
        case '数量':
         return (
          getFieldDecorator('num', {
            rules: [{ type: 'number', message: '请输入数字' }, {required: true, message: '请输入数量'}],
          })(
            <InputNumber style={{ width: '100%' }} max={100} min={0} placeholder="请输入数量"/>
          )
         )
        case '二代ID':
          return (
            getFieldDecorator('second_agent_id', {
              rules: [
                { required: true, message: '请选择二代ID' },
                // { validator: checkIdNum },
              ]
            })(
              <Select
              mode="tags"
              maxTagCount={20}
              placeholder="请输入二代ID"
            >
              {secondAgentId && secondAgentId.map(v => (
                <Option key={v}>{v}</Option>
              ))}
            </Select>
            )
          )
        case '到期时间':
          return (
            getFieldDecorator('end_time', {rules: [{ required: true, message: '请选择到期时间' }]})(
              <DatePicker style={{ width: '100%' }} format="YYYY-MM-DD"/>
            )
          )
        default:
          if (actionName === '创建') {
            return (
              getFieldDecorator(value, {
              rules: [{ required: true, message: `请输入${type}` }]
              })(
                <Input placeholder={`请输入${type}`}/>
              )
            )
          } else if(actionName === '编辑') {
            return (
              getFieldDecorator(value, {
              rules: [{ required: true, message: `请输入${type}` }],
              initialValue: formInfo && formInfo[value]
              })(
                <Input placeholder={`请输入${type}`}/>
              )
            )
          } else {
            return (
              <div className={styles.text}>{formInfo && formInfo[value]}</div>
            )
          }
      }
    }
    return (
      <Modal
        className={styles.container}
        title={`${action}${setting.name}`}
        visible={visible}
        width={560}
        destroyOnClose={true}
        onCancel={modalClose}
        footer={action !== '查看' ? <Button type="primary" onClick={this.handleSubmit} loading={loading}>{setting.btnName}</Button> : null}
      >
         <Form>
          {itemInfo.length && itemInfo.map(item => (
            <Fragment key={item.navName}>
              <nav className={styles.nav}>{item.navName}</nav>
              {item.formItem.map(o => (
                <FormItem
                  label={o.label}
                  {...formItemLayout}
                  key={o.label}
                >
                  {renderFormItem(o.label, o.value, action, formData)}
                </FormItem>
              ))}
            </Fragment>
          ))}
          {formData && formData.statusId === 1 && action === '查看' &&
            <Fragment>
              <nav className={styles.nav}>账号信息</nav>
              <FormItem
                label='初始密码'
                {...formItemLayout}
              >
                {formData.initial_password}
              </FormItem>
            </Fragment>
          }
        </Form>
      </Modal>
    )
  }
}
export default Form.create()(ModelForm);
