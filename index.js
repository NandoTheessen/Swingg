const express = require('express');
const server = express();
const PORT = process.PORT || 5555;
const morgan = require('morgan');

server.use(express.json());
server.use(morgan('short'));

server.listen(PORT, async () => {
  console.log(`Server is listening on port ${PORT}`);
});
