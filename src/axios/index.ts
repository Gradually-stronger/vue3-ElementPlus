import axios from "axios";
import { ElLoading, ElNotification } from "element-plus";
import { AxiosRequestConfig, Method } from "axios";


// 定义接口
interface PendingType {
  url?: string;
  method?: Method;
  params: any;
  data: any;
  cancel: (e: any)=>void;
}

const pending: Array<PendingType> = [];
// 创建axios实例
const request = axios.create({
  // baseURL: process.env.BASE_URL,
  timeout: 30000, // 请求超时时间
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  transformRequest: [
    function (data) {
      // 对 data 进行任意转换处理
      return data;
    },
  ],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  transformResponse: [
    function (data) {
      // 对 data 进行任意转换处理
      return JSON.parse(data);
    },
  ],
});

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
  for (const key in pending) {
    const item: number = +key;
    const list: PendingType = pending[key];
    // 当前请求在数组中存在时执行函数体
    if (
      list.url === config.url &&
      list.method === config.method &&
      JSON.stringify(list.params) === JSON.stringify(config.params) &&
      JSON.stringify(list.data) === JSON.stringify(config.data)
    ) {
      // 执行取消操作
      list.cancel("操作太频繁，请稍后再试");
      // 从数组中移除记录
      pending.splice(item, 1);
    }
  }
};

request.interceptors.request.use(
  (config) => {
    console.log(request);
   
    removePending(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

request.interceptors.response.use(
  (config) => {
    removePending(config.config);
    const { status } = config;
    if (status === 200) {
      return config.data;
    }
    if (status >= 500) {
      ElNotification({
        type: "error",
        message: "服务器发生错误",
        position: "top-right",
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
          resolve("");
        }, RETRY_DELAY || 1);
      });
      // instance重试请求的Promise
      return backoff.then(() => {
        return config(config);
      });
    }

    // eslint-disable-next-line
    return Promise.reject(response || { message: error.message });
  }
);

export default request;
