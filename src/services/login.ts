import request from '../until/request';

// const BaseUrl = "http://127.0.0.1:8819/api/v1";
const BaseUrl = '/api';

const signUp = () =>
  request({
    url: BaseUrl + '/register',
    method: 'POST',
  });

const login = (data = {}) => {
  return request({
    url: BaseUrl + '/login',
    method: 'POST',
    data: data,
  });
};

export default {
  signUp,
  login,
};
