/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-09-03 17:32:42
 * @LastEditTime : 2021-09-03 17:42:35
 * @LastEditors  : pacino
 */
"use strict";

// 生产环境，测试和正式
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
module.exports = {
  publicPath: "./", // 署应用包时的基本 URL。 vue-router hash 模式使用
  //  publicPath: '/app/', //署应用包时的基本 URL。  vue-router history模式使用
  outputDir: "dist", //  生产环境构建文件的目录
  assetsDir: "static", //  outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: !IS_PROD,
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    // host: '0.0.0.0',
    public: "localhost",
    https: false,
    port: 8080, // 端口
    open: true, // 启动后打开浏览器
    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: false,
      errors: true,
    },
    proxy: {
      // 配置跨域
      //   "/api": {
      //     target: "https://mjnmdm.mobizone.cn/api", // 测试环境代理
      //     // target: "http://192.168.0.145:8881", // 本地调试代理
      //     // ws:true,
      //     changOrigin: true,
      //     pathRewrite: {
      //       "^/api": "",
      //     },
      //   },
    },
  },
};
