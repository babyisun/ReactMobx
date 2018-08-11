import axios from 'axios';
import qs from 'qs';
import {
  message,
} from 'antd';


const redirect = (url) => {
  const redirectUrl = url.replace('%2FPLACEHOLDER%2F',
    encodeURIComponent(`${window.location.origin}/crmanage`));
  return window.location.replace(redirectUrl);
};
const handleRedirect = {
  // 110003: data => {
  //     redirect(data.url); //未登录跳转
  // },
  // 110006: data => {
  //     message.error('您的账号被禁用，请重新登录！', () => redirect(data.url));
  // },
  // 110008: () => {
  //     window.location.replace(`${window.location.origin}/crmanage`);
  // },
  310001: () => {
    // message.error('无权限进行此操作');
    window.location.hash = 'NoPower'; // redirect(data.url));
  },
  310002: (data) => {
    message.error('您的账号被禁用，请重新登录！', () => redirect(data.url));
  },
  310003: (data) => {
    redirect(data.url); // 未登录跳转
  },
  310004: (data) => {
    message.error('您的账号在审核中，请稍后登录！', () => redirect(data.url));
  },
};

const ajax = axios.create({
  baseURL: '/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
  transformRequest: [data => qs.stringify(data)],
});

ajax.interceptors.response.use((response) => {
  const {
    errno,
    errmsg,
    data,
    servertime,
  } = response.data;
    // 接口正常，返回 { errno, errmsg, data }
  if (response.status >= 200 && response.status < 300) {
    // 接口错误，404、500 等，返回错误
    if (errno === 0) {
      return {
        success: true,
        data,
        servertime,
      };
    }
    if (handleRedirect[errno]) {
      return handleRedirect[errno](data);
    }
    return message.error(errmsg || '接口错误');
  } return null;
}, (err) => {
  // console.log(err.response);
  if (err.response) {
    const code = err.response.status;
    if (code >= 500) {
      message.error('服务器打盹了~');
    }
  }
  return {
    error: err,
  };
});

export default ajax;
