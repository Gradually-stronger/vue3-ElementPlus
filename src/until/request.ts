import axios from 'axios';
import { ElMessage } from 'element-plus';

// 创建axios实例
const instance = axios.create({
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

instance.interceptors.request.use((config) => {
  return config;
});

instance.interceptors.response.use((config) => {
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
});

export default instance;
