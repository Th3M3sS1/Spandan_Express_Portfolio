/* File name: index.js
Name: Spandan Patel
Student Id: 301160189
Date: 15/02/2021
ExpressPortfolio
Copyright © 2021 Centennial College. All rights reserved.*/

let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

/*get service page*/
/*didn't use "index" as first argument of render method, so don't have to create if else statement by cheking title name for showing contents in index.ejs*/
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

/*get project page*/
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/*get contact page*/
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

/*get about page*/
router.get('/info', function(req, res, next){
  res.render('info', {title: 'Info'});
});

module.exports = router;
