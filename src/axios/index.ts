import axios from 'axios';
import { ElNotification } from 'element-plus';

interface Paramter {
  [props: string]: string | boolean | number | object | undefined | null;
}

// 创建axios实例
const request = axios.create({
  headers: {
    "Content-Type": 'application/json'
  },
  // baseURL: process.env.BASE_URL,
  timeout: 30000, // 请求超时时间
  // proxy:{
  //   port:7001,
  //   host:'127.0.01'

  // }
});



request.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (config) => {
    const { status } = config;
    if (status === 200) {
      return config.data;
    }
    if (status >= 500) {
      ElNotification({
        type: 'error',
        message: '服务器发生错误',
        position: 'top-right',
      });
    }
  },
  (error) => {
    const response = error.response;

    // 根据返回的http状态码做不同的处理
    switch (response?.status) {
      case 401:
        // token失效
        break;
      case 403:
        // 没有权限
        break;
      case 500:
        // 服务端错误
        break;
      case 503:
        // 服务端错误
        break;
      default:
        break;
    }

    // 超时重新请求
    const config = error.config;
    // 全局的请求次数,请求的间隙
    const [RETRY_COUNT, RETRY_DELAY] = [3, 1000];

    if (config && RETRY_COUNT) {
      // 设置用于跟踪重试计数的变量
      config.__retryCount = config.__retryCount || 0;
      // 检查是否已经把重试的总数用完
      if (config.__retryCount >= RETRY_COUNT) {
        return Promise.reject(response || { message: error.message });
      }
      // 增加重试计数
      config.__retryCount++;
      // 创造新的Promise来处理指数后退
      const backoff = new Promise((resolve) => {
        setTimeout(() => {
          resolve('');
        }, RETRY_DELAY || 1);
      });
      // instance重试请求的Promise
      return backoff.then(() => {
        return config(config);
      });
    }

    // eslint-disable-next-line
    return Promise.reject(response || { message: error.message });
  },
);

export default request;
