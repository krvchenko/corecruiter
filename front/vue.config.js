const path = require('path'),
      { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src/')
      }
    }
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~/assets/sass/app.scss";`
      }
    }
  },
})
