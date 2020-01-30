var _ = require('lodash');

/**
 * Returns the current authenticated user.
 * @param {{user: object}} req Request. Passport.js sets req.user object.
 * @param {object} res Respose.
 */

exports.currentUser = (req, res) => {
  // If user is not authenticated, return null.
  console.log('[iOLED-auth-API][currentUser][Request]', req.params, req.body);

  if (!req.user) res.json({error: 'User not logged in'});
  else {
    const user = _.pick(req.user, ['name', 'email', 'photo']);

    console.log('[iOLED-API][currentUser][Response]', user);
    res.status(200).send(user);
  }
};

// Logout
exports.logoutUser = (req, res) => {
  console.log('[iOLED-auth-API][logoutUser][Request]', req.params, req.body);

  req.logout();

  console.log('[iOLED-auth-API][logoutUser][Response]', []);
  res.redirect('/auth');
};
