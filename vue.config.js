/*
 * @Description  :
 * @Author       : pacino
 * @Date         : 2021-09-03 17:32:42
 * @LastEditTime : 2021-09-06 15:35:42
 * @LastEditors  : pacino
 */
"use strict";

// 生产环境，测试和正式
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const Timestamp = new Date().getTime();
module.exports = {
  // webpack配置
  configureWebpack: {
    // webpack 配置
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `static/js/[name].${Timestamp}.js`,
      chunkFilename: `static/js/[name].${Timestamp}.js`,
    },
  },
  publicPath: "./", // 署应用包时的基本 URL。 vue-router hash 模式使用
  //  publicPath: '/app/', //署应用包时的基本 URL。  vue-router history模式使用
  outputDir: "dist", //  生产环境构建文件的目录
  assetsDir: "static", //  outputDir的静态资源(js、css、img、fonts)目录
  lintOnSave: !IS_PROD, // 是否在保存的时候检查规范
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    public: "localhost:8080",
    https: false,
    port: 8080, // 端口
    open: true, // 启动后打开浏览器
    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: false,
      errors: true,
    },
  },
};
