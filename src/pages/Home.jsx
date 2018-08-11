import React from 'react';
import styles from './Home.scss';

const Home = () => (
  <div className={styles.home}>
    <div className={styles.welcome}>
      <header>
        <h2 key="title">
          顺丰 SAAS
        </h2>
        <p key="desc">
          让门店经营更简单
        </p>
      </header>
      <div className={styles.img} />
    </div>
  </div>
);

export default Home;
