// This file [webpack.config.js serves as the entry file for webpack]
// So webpack always load this file first. Hence, you can create multiple files for different webpack
  //configurations and import them her for use.
module.exports = {
  entry: "./entry.js",
  output:{
    path: __dirname,
    filename: "bundle.js"
  },
  module:{
    loaders:[
      {
        test: /\.css$/,
        loader:"style!css"
      }
    ]
  }
};
