var express = require('express');
var router = express.Router();

// Import controllers
var {authRequest, authCallback, authRedirect} = require('../controller/auth');

router.route('/google').get(authRequest);
router.route('/google/callback').get(authCallback, authRedirect);

// Export router 
module.exports = router;