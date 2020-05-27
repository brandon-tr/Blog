const register = require('../database/controllers/register');

module.exports = function (app) {
  console.log('1')
  app.post('/register', function (req, res) {
    register(req, res);
  });
};
