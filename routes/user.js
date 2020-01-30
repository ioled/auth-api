var express = require('express');
var router = require('express').Router();

// Import controllers
var {currentUser, logoutUser} = require('../controller/user');
var {logoutUser} = require('../controller/user');

// Router middleware to handle auth routes.
router.route('/').get(currentUser);
router.route('/logout').get(logoutUser);

// Export router
module.exports = router;
