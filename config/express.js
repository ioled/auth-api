var cookieSession = require('cookie-session');
var passport = require('passport');
var routes = require('../routes');
var keys = require('../config/keys');
var bodyParser = require('body-parser');
var {static} = require('express');

/**
 * Load express configuration
 * @module express/config
 * @param app The express app.
 */
//  Express configuration
module.exports = app => {
	// Use body-parser middleware.
	app.use(bodyParser.json());

	// Cookie time
	app.use(cookieSession({
			name: 'session',
			// Time to expire in ms.
			maxAge:  60 * 60 * 1000,
			keys: [keys.cookieKey]
		})
	);
	
	/* Passport middleware to use cookie session.
	 * The user can be accessed by 'req.user' in the express request.
	 */
	app.use(passport.initialize());
	app.use(passport.session());

	// Use all routes
	app.use(routes);
	
};
