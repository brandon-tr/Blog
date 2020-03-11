const mongoose = require('mongoose');

await mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds137740.mlab.com:37740/blog-dev', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

var fs = require("fs");
var path = require("path");

var models_path = path.join(__dirname, "./models/");

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf("js") > 0) {
    require(models_path + "/" + file);
  }
});