const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = (env) => {
  return {
    output: {
      filename: 'main.js',
      path: path.join(__dirname,"docs")
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: "宁波言成电子技术有限公司",
      }),
    ],
    devServer: {
      // 当错误时才打印状态
      stats: "errors-only",
      // process.env 是当前命令运行环境信息
      // 可以通过 HOST=3000 HOST=0.0.0.0 npm run start 设置环境变量
      host: process.env.HOST, // Defaults to `localhost`
      port: 8081, // Defaults to 8080
      open: true, // Open the page in browser
      overlay: true,
    }
  }
};