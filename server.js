exports.startServer = function(config, callback) {
  var express = require("express");
  var app = express();

  app.use(express.static(require("path").join(__dirname, "public")));
  callback(app.listen(process.env.PORT, process.env.IP));
};
