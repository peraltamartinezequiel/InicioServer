require('dotenv').config();

var Server = require('./models/server');

var svr = new Server();

svr.listen();