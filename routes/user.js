var express = require('express');
var router = require('express').Router();

// Import controllers
var { currentUser} = require('../controller/user');

router.route('/').get(currentUser);

// Export router 
module.exports = router;
