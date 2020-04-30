// const path = require("path");

// const utils = {
//   assetsPath: function(_path) {
//     const assetsSubDirectory =
//       process.env.NODE_ENV === "production"
//         ? // 生产环境下的 static 路径
//           "public"
//         : // 开发环境下的 static 路径
//           "public";

//     return path.posix.join(assetsSubDirectory, _path);
//   },
//   resolve: function(dir) {
//     return path.join(__dirname, "..", dir);
//   }
// };


// module.exports = {
//   configureWebpack: {
//     module: {
//       rules: [
//         {
//           test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
//           loader: "url-loader",
//           options: {
//             limit: 10000,
//             name: utils.assetsPath("fonts/[name].[hash:7].[ext]")
//           }
//         }
//       ]
//     }
//   }
// };
// module.exports = {
//   chainWebpack: config => {
//     const fonts = config.module.rule('fonts')
//     fonts.uses.clear()
//     // GraphQL Loader
//     fonts
//       .test(/\.(woff2?|eot|ttf|otf)(\?.*)?$/)
//       .use("url-loader")
//       .loader("url-loader")
//       .options({
//         limit: 10000,
//         name: "fonts/[name].[hash:7].[ext]"
//       })
//   }
// };