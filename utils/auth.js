const withAuth = (req, res, next) => {
    if (!req.session.dogWalker_id) {
      res.redirect('/login');
    } else {
      next();
    }
  };




  
module.exports = withAuth;
