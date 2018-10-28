const jwt = require('jsonwebtoken');
const secret = process.env.secret || 'shhhh';

module.exports = {
  sign: async function createToken(username) {
    const token = await jwt.sign(username, secret, { expiresIn: '1h' });
    return token;
  },
  verify: async function verifyToken(token) {
    const result = await jwt.verify(token, secret);
    return result;
  },
};