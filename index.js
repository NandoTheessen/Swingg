const express = require('express');
const server = express();
const PORT = process.PORT || 5555;
const morgan = require('morgan');
const { db } = require('./src/DB/setup');

server.use(express.json());
server.use(morgan('short'));

server.listen(PORT, async () => {
  const customers = await db('customers');
  const collections = await db('collections');
  const products = await db('products');
  console.log(customers);
  console.log(collections);
  console.log(products);
  console.log(`Server is listening on port ${PORT}`);
});
