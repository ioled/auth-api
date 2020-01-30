var express = require('express');
var mongoose = require('mongoose');

// Configuration.
var keys = require('./config/keys');

// Configuration.
var serverConfig = require('./config/server');
var expressConfig = require('./config/express');

// Passport configuration.
require('./services/passport');

// Create the express app and load configurations.
var app = express();
expressConfig(app);

// Connect to the database.
mongoose.connect(keys.mongoURI, { 
    useNewUrlParser: true, 
    useCreateIndex: true
    }
);

exports.auth = app;
