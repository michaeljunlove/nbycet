const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const devMode = process.env.NODE_ENV !== 'production'

module.exports = (env) => {
  return {
    entry:{
      index:"./src/index.js",
      company:"./src/company.js",
      electricResistance:"./src/electricResistance.js",
      potentiometer: './src/potentiometer.js',
      car: './src/car.js',
      order: './src/order.js'
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
          use: [
            {
              loader: MiniCssExtractPlugin.loader
            },
            {
              loader: 'css-loader' // translates CSS into CommonJS
            }, 
            {
              loader: 'less-loader' // compiles Less to CSS
            }
          ]
        }
        
      ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      }),
      new HtmlWebpackPlugin({
          template:'./src/index.html',
          filename:'index.html',//生成的html页面的名字为one.html
          title:"宁波言成电子技术有限公司",//它的title为one，记得要在src/one.html中加入<%= %>
          hash:true,
          chunks:['index'],
          minify:{
            removeComments: false, // 删除注释
            collapseWhitespace: false // 删除空格
          }
      }),
      new HtmlWebpackPlugin({
          template:'./src/index.html',
          filename:'company.html',
          title:"宁波言成电子技术有限公司",
          hash:true,
          chunks:['company'],
          minify:{
            removeComments: false, // 删除注释
            collapseWhitespace: false // 删除空格
          }
      }),
      new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'electricResistance.html',
        title:"宁波言成电子技术有限公司",
        hash:true,
        chunks:['electricResistance'],
        minify:{
          removeComments: false, // 删除注释
          collapseWhitespace: false // 删除空格
        },
      }),
      new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'potentiometer.html',
        title:"宁波言成电子技术有限公司",
        hash:true,
        chunks:['potentiometer'],
        minify:{
          removeComments: false, // 删除注释
          collapseWhitespace: false // 删除空格
        },
      }),
      new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'order.html',
        title:"宁波言成电子技术有限公司",
        hash:true,
        chunks:['order'],
        minify:{
          removeComments: false, // 删除注释
          collapseWhitespace: false // 删除空格
        },
      }),
      new HtmlWebpackPlugin({
        template:'./src/index.html',
        filename:'car.html',
        title:"宁波言成电子技术有限公司",
        hash:true,
        chunks:['car'],
        minify:{
          removeComments: false, // 删除注释
          collapseWhitespace: false // 删除空格
        },
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
    },
    mode : devMode ? 'development' : 'production'
  }
};