module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mthtml/' : '/',
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false
    }
  },
  devServer: {
    // proxy: 'http://localhost:4000'
  }
}
