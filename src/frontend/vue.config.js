module.exports = {
  "outputDir": "/Users/zingo/my/techlect/src/main/resources/static",
  "devServer": {
    "proxy": {
      "/api": {
        "target": "http://localhost:8080",
        "ws": true,
        "changeOrigin": true
      }
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}