const mongoose = require('mongoose');
const secret = 'SuperSecret';
const User = mongoose.model('UserSchema');
const jwt = require('jsonwebtoken');

// eslint-disable-next-line consistent-return
module.exports = function register(req, res) {
  if (req.body.password.length < 5) {
    return res.status(400).json({ message: 'Error password too Short' });
  }
  const user = new User();
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.username = req.body.username;
  user.email = req.body.email;
  user.password = req.body.password;
  // eslint-disable-next-line consistent-return
  user.save(function (err) {
    // TODO Send correct errors back
    if (err) {
      return res.status(400).json({ message: 'Error bad response' });
    }
    const saveToToken = {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      email: user.email,
    };
    const token = jwt.sign(saveToToken, secret, { expiresIn: '1 day' });
    return res.status(200).json(token);
  });
};
