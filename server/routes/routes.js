const register = require('../database/controllers/auth');
const getStatsDashboard = require('../database/controllers/admin');

module.exports = function (app) {
  app.post('/register', function (req, res) {
    register(req, res);
  });
  app.post('/getStatsDashboard', function (req, res) {
    getStatsDashboard(req, res);
  });
};
