var express = require('express');
var app = express();

// Import routes
var authRoute = require('./auth');
var logoutRoute = require('./logout');
var userRoute = require('./user');

// Use routes
app.use(authRoute);
app.use(logoutRoute);
app.use(userRoute);

// Export app 
module.exports = app;