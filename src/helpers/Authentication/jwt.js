const jwt = require('jsonwebtoken');
const secret = process.env.secret || 'shhhh';

module.exports = {
  sign: async function createToken(username) {
    try {
      const token = await jwt.sign(username, secret, { expiresIn: '1h' });
      return token;
    } catch (e) {
      return false;
    }
  },
  verify: async function verifyToken(token) {
    try {
      const result = await jwt.verify(token, secret);
      return result;
    } catch (e) {
      return false;
    }
  },
};
