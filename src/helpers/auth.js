const bcrypt = require('bcrypt');

module.exports = {
  hash: function hashPassword(password) {
    return bcrypt.hashSync(password, 16);
  },
  compare: function compareHashes(passwordAttempt, hash) {
    return bcrypt.compareSync(passwordAttempt, hash);
  },
};
