const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://projectbot-5xtl.onrender.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      },
      '/socket.io': {
        target: 'https://projectbot-5xtl.onrender.com/',
        ws: true,
        changeOrigin: true
      }
    }
  }
})
