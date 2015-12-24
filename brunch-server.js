module.exports = function(port, path, callback) {
  var express = require("express");
  var app = express();

  app.use(express.static(require("path").join(__dirname, path)));
  app.listen(process.env.PORT, process.env.IP, callback);
};
