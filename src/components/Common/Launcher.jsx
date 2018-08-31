import React from 'react';
import styles from './Launcher.scss';

const MESSAGE = {
  NOPOWER: { title: '无权限', content: '您的账号无权限，请联系管理员' },
  FROZEN: { title: '被冻结', content: '天寒地冻，账号被冻结了' },
  ERROR: { title: 'Error', content: '服务器加载异常' },
};
/**
 * Launcher 默认为圆环加载 <Launcher />
 *
 * @param  {string} text           loading时显示在屏幕中间的文字，空为Loading... <Launcher text="加载中..." />
 * @param  {boolean} loading       详情页加载 横条模拟 <Launcher loading />
 * @param  {boolean} circle        详情页加载 圆形+横条模拟 <Launcher loading circle />
 * @param  {object} message        title:显示的文字，content：显示的内容提示 <Launcher message={MESSAGE.FROZEN} />
 */
const Launcher = ({ text, loading, circle, message }) => {
  if (message) {
    return (
      <div className={styles.message}>
        <h2>
          {message.title}
        </h2>
        <p>
          {message.content}
        </p>
      </div>
    );
  }
  if (loading) {
    return (<div className={[styles.loading, circle ? styles.circle : ''].join(' ')} />);
  }
  return (
    <div className={`${styles.loadCircle} ${text ? styles.text : styles.circle}`}>
      <span>
        {text || 'Loading...'}
      </span>
    </div>
  );
};

export {
  Launcher,
  MESSAGE,
};
