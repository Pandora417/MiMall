// module.exports = {
//   devServer:{
//     host:'localhost',
//     port:8080,
//     proxy:{
//       '/api':{
//         target:'https://coding.imooc.com',
//         changeOrigin:true, //是否将主机头源点改为目标url地址
//         pathRewrite:{
//           '/api':''
//         }
//       }
//     }
//   },
//   // publicPath:'/app',
//   // outputDir:'dist',
//   // indexPath:'index2.html',
//   // lintOnSave:false,
//   productionSourceMap:true,
//   chainWebpack:(config)=>{
//     config.plugins.delete('prefetch');
//   }
// }