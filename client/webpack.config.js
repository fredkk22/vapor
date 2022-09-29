// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackPwaManifest = require('webpack-pwa-manifest');
// const path = require('path');
// const { InjectManifest } = require('workbox-webpack-plugin');

// module.exports = () => {
//   return {
//     mode: 'development',
//     // Entry point for files
//     entry: {
//       main: './src/index.js',
//     //   install: './src/install.js'
//     },
//     // Output for our bundles
//     output: {
//       filename: '[name].bundle.js',
//       path: path.resolve(__dirname, 'build'),
//     },
//     plugins: [
//       // Webpack plugin that generates our html file and injects our bundles. 
//       new HtmlWebpackPlugin({
//         template: './index.html',
//         title: 'Vapor'
//       }),
     
//       // Injects our custom service worker
//       new InjectManifest({
//         swSrc: './src/serviceWorker.js',
//         swDest: 'serviceWorker.js',
//       }),

//       // Creates a manifest.json file.
//     //   new WebpackPwaManifest({
//     //     fingerprints: false,
//     //     inject: true,
//     //     name: 'Vapor',
//     //     short_name: 'V',
//     //     description: 'A stop for your games',
//     //     background_color: '#225ca3',
//     //     theme_color: '#225ca3',
//     //     start_url: './',
//     //     publicPath: './',
//     //     icons: [
//     //       {
//     //         src: path.resolve('public/favicon.png'),
//     //         sizes: [96, 128, 192, 256, 384, 512],
//     //         destination: path.join('assets', 'icons'),
//     //       },
//     //     ],
//     //   }),
//     ],

//     module: {
//       // CSS loaders
//       rules: [
//         {
//           test: /\.css$/i,
//           use: ['style-loader', 'css-loader'],
//         },
//         {
//           test: /\.m?js$/,
//           exclude: /node_modules/,
//           // We use babel-loader in order to use ES6.
//           use: {
//             loader: 'babel-loader',
//             options: {
//               presets: ['@babel/preset-env'],
//               plugins: ['@babel/plugin-proposal-object-rest-spread', '@babel/transform-runtime'],
//             },
//           },
//         },
//       ],
//     },
//   };
// };
