/* File name: index.js
Name: Spandan Patel
Student Id: 301160189
Date: 15/02/2021
ExpressPortfolio
Copyright © 2021 Centennial College. All rights reserved.*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/*get service page*/
/*didn't use "index" as "view" in render method, so don't have to create if else statement by cheking title name for showing contents in index.ejs*/
router.get('/services', indexController.displayServicePage);

/*get project page*/
router.get('/projects', indexController.displayProjectPage);

/*get contact page*/
router.get('/contact', indexController.displayContactPage);

/*get about page*/
router.get('/info', indexController.displayInfoPage);

module.exports = router;
