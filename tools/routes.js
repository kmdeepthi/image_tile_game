var express = require('express');
var User = require('../tools/models/user');

var router = express.Router();
router.use(function (req, res, next) {
  console.log('Calling the api');
  next();
});

router.get('/', function (req, res) {
  res.json({message: 'Yaay, apis are accessible!'});
});

router.route('/user')
  .post(function (req, res) {
    User.findOne({username: req.body.username, pwd: req.body.pwd}, function (err, user) {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  });

router.route('/user/create')
  .post(function (req, res) {
    var user = new User();
    user.username = req.body.username;
    user.pwd = req.body.pwd;
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user.isAccessible = req.body.isAccessible || false;

    // save the user
    user.save(function (err) {
      if (err) {
        res.send(err);
      }

      res.json({message: 'User created.'});
    });
  });

module.exports = router;
