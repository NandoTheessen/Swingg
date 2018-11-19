const { db } = require('../../DB/setup');
const { hash } = require('../Authentication/bcrypt');
const { sign } = require('../Authentication/jwt');

// Create a Singleton exposing the db API
const DataAccessObject = (() => {
  let instance;

  function createInstance() {
    const dataAccess = {
      // TODO: add data access methods

      // Route for customers to register to the plattform supplying their
      // email, name and a password
      customerRegistration: async (req, res) => {
        const { firstName, lastName, password, email, company } = req.body;
        // throw if information is missing
        if (!firstName || !lastName || !password || !email) {
          res.status(400).json({ message: 'Please prodive your user data' });
        }
        // hash the customers password in order to save it to the DB
        const hashedPW = hash(password);
        // Save new customer to the DB
        const customerId = await db('customers')
          .insert({
            firstName,
            lastName,
            email,
            password: hashedPW,
            company,
          })
          .catch(err => {
            console.log(err);
            res.status(500).json({ message: 'Internal Server Error' });
          });
        // create JWT
        const token = sign(customerId);
        if (!token) {
          res.status(500).json({ message: 'internal server error' });
        }
        res.status(201).json(token);
      },
    };
    return dataAccess;
  }
  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();   

module.exports = DataAccessObject.getInstance();
