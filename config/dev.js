/**
 * Production keys. 
 * @description Production keys must be set as enviroment variables (Google App Engine).
 * @param {string} googleClientID - Needed to call the sing-in API.
 * @param {string} googleClientSecret - Needed for server-side operations.
 * @param {string} mongoURI - mlab database uri.
 * @param cookieKey - encryption key used for serialize user in passport.js.
 */
module.exports = {
	googleClientID: '1085704246366-oif6gj6tbpsh5nmni6v8ihaudgsra45v.apps.googleusercontent.com',
	googleClientSecret: '4XsB-ju7K_6Uditb25V04tml',
	mongoURI: 'mongodb+srv://tessla:macarena100@ioled-cluster-xkzhy.gcp.mongodb.net/test?retryWrites=true&w=majority',
	cookieKey: '0'
};
