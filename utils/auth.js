const withAuth = (req, res, next) => {
  if (!req.session.dogwalker_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
