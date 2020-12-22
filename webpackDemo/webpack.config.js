const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Webpack = require('webpack')

module.exports = {
  devServer:{
    port:3000,
    hot:true,
    contentBase:'./dist'
  },
  mode:'development', // 开发模式
  entry: path.resolve(__dirname,'./src/index.js'),    // 入口文件
  output: {
      filename: '[name].[hash:8].js',      // 打包后的文件名称
      path: path.resolve(__dirname,'dist')  // 打包后的目录
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use:['style-loader','css-loader'] // 从右向左解析原则
      },
      {
        test:/\.less$/,
        use:[MiniCssExtractPlugin.loader,'css-loader','less-loader'] // 从右向左解析原则
      },
      {//npm i -D eslint eslint-plugin-import eslint eslint-loader
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {}
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].[hash].css",
      chunkFilename: "[id].css",
    }),
    new Webpack.HotModuleReplacementPlugin()
  ]
}