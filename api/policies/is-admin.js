module.exports = async function(req, res, proceed){

  // First, check whether the request comes from a logged-in user.
  // > For more about where `req.me` comes from, check out this app's
  // > custom hook (`api/hooks/custom/index.js`).
  if (!req.me) {
    return res.unauthorized();
  }//•

  // Then check that this user is an "admin".
  if (!req.me.isAdmin) {
    return proceed();
  }//•

  // Then check that this user is a "super admin".
  if (!req.me.isSuperAdmin) {
    return res.forbidden();
  }//•

}
