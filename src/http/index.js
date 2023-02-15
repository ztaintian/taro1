import Taro from '@tarojs/taro';
import { axios } from 'taro-axios'
// 自版本 0.7.0 起你也可以这样引入:
// import axios from 'taro-axios'
const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000
});
// 请求
axios.interceptors.request.use(function (config) {
  Taro.showLoading()
  return config;
}, function (error) {

  return Promise.reject(error);
});

// 反应
axios.interceptors.response.use(function (response) {
  Taro.hideLoading()
  return response;
}, function (error) {
  return Promise.reject(error);
});

export default axios
