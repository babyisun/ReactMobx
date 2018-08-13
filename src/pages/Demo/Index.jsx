import React from 'react';
import styles from './Index.scss';

const Demo = () => (
  <div className={styles.demo}>
    <div>
      <header>
        <h2 key="title">
          这是一个Demo页
        </h2>
        <p key="desc">
          Demo页是一个无状态组件
        </p>
      </header>
    </div>
  </div>
);

export default Demo;
