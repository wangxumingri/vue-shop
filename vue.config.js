module.exports = {
    // 基本路径
    publicPath: './', // 输出的index.html引入的资源路径前面增加/shop
    // 打包后文件输出目录
    outputDir: 'dist', // 打包输出的文件夹名
    indexPath: 'index.html',
    // 开发时，代理后台接口的配置
    // devServer: {
    //     // 设置默认端口
    //     port: 8080,
    //     // 默认打开浏览器
    //     open: false,
    //     proxy: {
    //         '/api': {
    //             // 目标 API 地址
    //             target: 'http://localhost:9801', // 真实的api地址
    //             // 如果要代理 websockets
    //             // ws: true,
    //             // 将主机标头的原点更改为目标URL
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 '^/api': ''
    //             }
    //         }
    //     }
    // }
}
