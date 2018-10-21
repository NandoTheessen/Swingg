const express = require('express');
const router = express.router();
const server = express();
const PORT = env.process.PORT || 5555;
const morgan = require('morgan');

server.use(express.json());
server.use(morgan('short'));

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = router;
