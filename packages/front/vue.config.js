module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        vue$: 'vue/dist/vue.esm.js', // For bootstrap-vue
      },
    },
  },
  devServer: {
    proxy: 'http://localhost:5000',
  },
};
