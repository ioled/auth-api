var express = require('express');
var app = express();

var serverConfig = require('./config/server');
var {auth} = require('./index.js');

// Start the app
app.use('/auth', auth);

// Start the app
app.listen(serverConfig.PORT, () => {
  console.log(' \n Running auth-api in PORT ' + serverConfig.PORT + '...');
});
