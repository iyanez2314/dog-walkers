const ownerwithAuth = (req, res, next) => {
    if (!req.session.owner_id) {
      res.redirect('/ownerlogin');
    } else {
      next();
    }
  };



  module.exports = ownerwithAuth;