module.exports = {
  devServer: {
    proxy: {
      '/v7': {
        target: 'http://m.ziroom.com',
        //   ws: true,
        changeOrigin: true
      },
      // '/v7': {
      //   target: 'http://m.ziroom.com'
      // },
      '/v5': {
        target: 'http://m.ziroom.com',
        changeOrigin: true
      },
      '/wap': {
        target: 'http://m.ziroom.com',
        changeOrigin: true
      }
    }
  }
}
