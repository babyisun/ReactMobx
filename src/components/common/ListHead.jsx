import React from 'react';
import { Button,  Row, Col } from 'antd';

const ListHead = ({title, btnName = '', onCreate}) => {
  return (
    <Row gutter={24} type="flex" justify="space-between" className="page-header">
      <Col span={12}>
        <h2>{title}</h2>
      </Col>
      {btnName && (
        <Col span={12} style={{ textAlign: 'right' }}>
          <Button type="primary" onClick={onCreate}>{btnName}</Button>
        </Col>
      )}
    </Row>
  )
}

export default ListHead;
