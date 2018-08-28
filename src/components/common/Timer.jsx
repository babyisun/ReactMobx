import React from 'react';
import styles from './Timer.scss';

const Timer = () => (
  <div className={styles.timer}>
    <div className="wrapper right">
      <div className="circleProgress rightcircle right_cartoon" />
    </div>
    <div className="wrapper left">
      <div className="circleProgress leftcircle left_cartoon" />
    </div>
    <span className="content" />
  </div>
);

export default Timer;
