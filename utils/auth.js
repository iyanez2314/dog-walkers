const withAuth = (req, res, next) => {
    if (!req.session.dogWalker_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };



const ownerwithAuth = (req, res, next) => {
  if (!req.session.owner_id) {
    res.redirect('/ownerlogin');
  } else {
    next();
  }
};
  
module.exports = withAuth, ownerwithAuth;