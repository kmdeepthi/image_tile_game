var express    = require('express');
var bodyParser = require('body-parser');
var open = require('open');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config.dev');
var mongoose   = require('mongoose');

var User = require('../tools/models/user');
var Router = require('../tools/routes');

var app = express();

/* eslint-disable no-console */

var port = process.env.PORT || 3000;
const compiler = webpack(config);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var dbURI = 'mongodb://localhost/ConnectionTest';
mongoose.connect(dbURI);
mongoose.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error',function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function() {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

app.use('/api', Router);

app.get('*', function(req, res) {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log('Listening on port: ' + port);
    open('http://localhost:' + port);
  }
});
