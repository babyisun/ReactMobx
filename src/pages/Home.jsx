import React from 'react';
import styles from './Home.scss';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.welcome}>
      <header>
        <h2 key="title">
          这是一个主页
        </h2>
        <p key="desc">
          主页是一个无状态组件
        </p>
      </header>
      <div className={styles.img} />
    </div>
  </div>
);

export default Home;
