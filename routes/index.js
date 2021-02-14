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

router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.get('/info', function(req, res, next){
  res.render('info', {title: 'Info'});
});

module.exports = router;
