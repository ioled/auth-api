var express = require('express');
var router = express.Router();

// Import controllers
var {logoutUser} = require('../controller/user');

router.route('/logout').get(logoutUser);

// Export router 
module.exports = router;