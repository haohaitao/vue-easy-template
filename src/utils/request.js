/*
 * @Description  : 请求类
 * @Author       : pacino
 * @Date         : 2021-09-03 16:11:12
 * @LastEditTime : 2021-09-03 17:09:58
 * @LastEditors  : pacino
 */
import axios from "axios";
// 根据环境不同引入不同api地址
import { baseApi } from "@/config";
// create an axios instance
const service = axios.create({
  baseURL: baseApi, // 基础url
  withCredentials: true,
});

// request拦截器 request interceptor
service.interceptors.request.use(
  (config) => {
    // 不传递默认开启loading
    // if (!config.hideloading) {
    //   // loading
    //   Toast.loading({
    //     forbidClick: true,
    //   });
    // }
    config.headers["Authorization"] = "Authorization"; // 鉴权
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// respone拦截器
service.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    // 发生错误提示异常信息
    // Dialog.alert({
    //   title: '提示',
    //   message: '数据异常，请稍后重试'
    // }).then(() => {
    //   // on close
    // })
    return Promise.reject(error);
  }
);

/**
 * @Description GET请求
 * @param url 请求地址
 * @param params 请求参数  默认 {}
 * @param showLoading 是否显示全局Loading动画
 */
export const get = (url, params = {}) => {
  return service.get(url, { params });
};

/**
 * @Description POST请求
 * @param url 请求地址
 * @param data 请求参数 默认 {}
 * @param showLoading 是否显示全局Loading动画
 */
export const post = (url, params = {}) => {
  return service.post(url, params);
};
