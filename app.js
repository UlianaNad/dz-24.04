const express = require('express');
const server = express();

const path = require('path');

const pageRoute = require('./routes/routeMain');


//server.use(express.static(path.join(__dirname, 'public')));
server.use(express.static(__dirname + '/public'));
server.set('view engine' , 'ejs');
server.set('views', __dirname + '/views');

server.use('/', pageRoute);

server.listen(5000);