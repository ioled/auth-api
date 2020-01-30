var _ = require('lodash');

/**
 * Returns the current authenticated user.
 * @param {{user: object}} req Request. Passport.js sets req.user object.
 * @param {object} res Respose.
 */

 exports.currentUser = (req, res) => {
	// If user is not authenticated, return null.
	if (!req.user) res.json({error: 'User not logged in'});

	else {	
		var user = _.pick(req.user, ['name', 'email', 'photo']);
    	res.send(user);
	} 
	
};

// Logout
exports.logoutUser = (req, res) => {
	req.logout();
	res.redirect('/auth');
};

