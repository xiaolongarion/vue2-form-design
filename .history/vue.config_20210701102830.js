module.exports = {
  css: {
    modules: true // 开启CSS module
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"] // 加入ts 和 tsx
    }
  },
  devServer: {
    port: 8800 // webpack-dev-server port
  }
};
