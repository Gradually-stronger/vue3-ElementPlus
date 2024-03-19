import axios from 'axios';
import { ElMessage } from 'element-plus';
import QueryString from 'qs';

// 创建axios实例
const instance = axios.create({
  // baseURL: process.env.BASE_URL,
  timeout: 30000, // 请求超时时间
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  transformRequest: [
    function (data) {
      // 对 data 进行任意转换处理
      return QueryString.stringify(data);
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

instance.interceptors.request.use((config) => {
  return config;
});

// 更新 Axios 实例的默认配置
export const updateAxiosInstance = (token: string) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

instance.interceptors.response.use(
  (config) => {
    const { status } = config;
    if (status === 200) {
      return config.data;
    }
    if (status >= 500) {
      ElMessage.error({
        type: 'error',
        message: '服务器错误',
      });
    }
    if (status >= 300) {
      ElMessage.error({
        type: 'error',
        message: '请求错误',
      });
    }
  },
  (error) => {
    const { response } = error;
    const { data } = response;
    ElMessage.error({
      type: 'error',
      message: data.message,
    });
    return Promise.reject(error);
  },
);

export default instance;
