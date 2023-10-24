const express = require('express');
const config = require('./config');
const http = require('http');

const cors = require('cors');


const app = express();
app.use(cors());
const server = http.createServer(app);


app.set('port', 8080)


const initDB = require('./db/database');




server.listen(8080, function () {
    console.log('App running on *: ' + 8080);
  });