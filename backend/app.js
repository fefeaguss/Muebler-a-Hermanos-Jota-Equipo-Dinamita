var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var error404 = require('./middleware/error404');
var errorHandler = require('./middleware/errorHandler');
var requestLogger = require('./middleware/logger');


var productosRouter = require('./routes/productos');



var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/productos', productosRouter);




app.use(error404);  
app.use(errorHandler);
app.use(requestLogger);

module.exports = app;
