const jwt = require('../Authentication/jwt');

module.exports = {
  authenticate: function auth(req, res, next) {
    const token = req.get('Authorization');
    if (!token) res.status(403).json(err);
    const decoded = jwt.verify(token);
    if (decoded) {
      req.decoded = decoded;
      next();
    } else {
      return res.status(422).json(err);
    }
  },
};

