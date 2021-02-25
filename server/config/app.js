/* File name: app.js
Name: Spandan Patel
Student Id: 301160189
Date: 15/02/2021
ExpressPortfolio
Copyright © 2021 Centennial College. All rights reserved.*/


let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

//database setup
let mongoose = require('mongoose');
let db = require('./db');

//point mongoose to db URI
mongoose.connect(db.URI, {useNewUrlParser: true, useUnifiedTopology: true});

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...');
});

//creating variable to store routes
let indexRouter = require('../routes/index');
let usersRouter = require('../routes/users');
let bookRouter = require('../routes/book');

let app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//let us help to use shorter path for contents and modules
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

//use "/" for variable "indexRouter" we created above to refer index.ejs file
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/book-list', bookRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
