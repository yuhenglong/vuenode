const path = require('path');

module.exports = {
    //入口文件
    entry: './src/index.js',
    output: {
        //虚拟打包路径
        publicPath: 'xuni',
        //打包出来的文件名
        filename: 'bundle.js',
    },
    devServer: {
        //监听端口
        port: 8080,
        //静态资源文件夹
        contentBase: "www"
    }
};