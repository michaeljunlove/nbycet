const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = (env) => {
  return {
    entry:{
      index:"./src/index.js",
      two:"./src/main.js"
    },
    output: {
      path:path.resolve(__dirname,'docs'),
      filename:'[name].boundle.js'
    },
    module: {
      rules: [
        //node_modules文件夹不需要babel进行转换
        { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' }, 
        // 编译顺序从右往左
        {
          test: /\.(less|css)$/,
          use: [{
            loader: 'style-loader' // creates style nodes from JS strings
          }, {
            loader: 'css-loader' // translates CSS into CommonJS
          }, {
            loader: 'less-loader' // compiles Less to CSS
          }]
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
          template:'./src/index.html',
          filename:'index.html',//生成的html页面的名字为one.html
          title:"宁波言成电子技术有限公司1",//它的title为one，记得要在src/one.html中加入<%= %>
          hash:true,
          chunks:['index']
      }),
      new HtmlWebpackPlugin({
          template:'./src/index.html',
          filename:'two.html',
          title:"宁波言成电子技术有限公司2",
          hash:true,
          chunks:['two']
      })
    ],
    devServer: {
      // 当错误时才打印状态
      stats: "errors-only",
      // process.env 是当前命令运行环境信息
      // 可以通过 HOST=3000 HOST=0.0.0.0 npm run start 设置环境变量
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT, // Defaults to 8080
      open: true, // Open the page in browser
      overlay: true,
    }
  }
};