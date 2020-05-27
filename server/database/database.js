const mongoose = require('mongoose');
const dbInfo = require('./dbInfo.json');

console.log(dbInfo.info);

mongoose.connect(dbInfo.info, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fs = require('fs');
const path = require('path');

const models_path = path.join(__dirname, './models/');

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf("js") > 0) {
    require(models_path + "/" + file);
  }
});
