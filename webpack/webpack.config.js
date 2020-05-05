const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'img/[name].[hash:8].[ext]',
            }
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.Vue$/,
        use: ["vue-loader"]
      }
     
    ]
  }, 
  resolve: {
    alias: {
      "vue$":"vue/dist/vue.esm.js"
    }
  },
  plugins: [
    new webpack.BannerPlugin("最终版权归me所有"),
    new HtmlWebpackPlugin({
      template: "index.html"
    })
  ],
  devServer:{
    contentBase: "./dist",
    inline: true,
    port: 7777
  }
}