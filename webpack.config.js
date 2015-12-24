module.exports = {
  entry: "./app/main.js",
  output: {
    path: __dirname + "/public",
    filename: "javascripts/webpack.min.js"
  },
  module: {
    loaders: [
      {test: /\.(ttf|otf|eot|svg|woff(2)?)$/, loader: "file?name=fonts/[name].[ext]"},
      {test: /\.html/, loader: 'file?name=[name].[ext]'},
      {test: /\.css$/, loader: "style!css"}
    ]
  }
};
