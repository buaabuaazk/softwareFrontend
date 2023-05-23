const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
  })

//   module.exports = {
//     devServer: {
//       host: "localhost",
//       port: 8080,
//       https: false,
//       hotOnly: false,
//       proxy: {  //配置跨域
//           "/api": {
//               target: "http://81.70.17.242.8000/", //后端跑在本地8000端口，若连接服务器需改为后端运行地址
//               ws: true,
//               changOrigin: true,  //允许跨域
//               pathRewrite: {
//                   "^/api": "",
//               },
//           },
//       }
//   },
//   }
