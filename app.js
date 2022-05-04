'use strict';
const http = require('http');// added the http require

const hostname = '127.0.0.1';
const port = 3000;// Corrected the port from 3333 to 3000

const express = require('express'); // removed the , and replaced with ;
const es6Renderer = require('express-es6-template-engine');// removed es6Ren

const app = express();

app.engine('html', es6Renderer);
app.set('views', './views');
app.set('view engine', 'html');

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
});

const rootController = require('./routes/index');
const rangersController = require('./routes/rangers');


app.use('/rangers', rangersController);