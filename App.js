const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const express = require('express');
const server = express();
const routes = require('./src/Routes/index');

// implemented Middleware
server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan('short'));

// Route implementation

server.use('/api', routes);

module.exports = server;
