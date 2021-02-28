/* File name: book.js
Name: Spandan Patel
Student Id: 301160189
Date: 24/02/2021
ExpressPortfolio - with DB
Copyright © 2021 Centennial College. All rights reserved.*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//connect to our book model
let Book = require('../models/book');

//create reference of Book Controller
let bookController = require('../controllers/book');

//Get route for the Book List Page - Read Operation
router.get('/', bookController.displayBookList);

//Get route for display the Book Add Page - Create Operation
router.get('/add', bookController.displayAddPage);

//Post route for process the Book Add Page - Create Operation
router.post('/add', bookController.processAddPage);

//Get route for display the Book Edit Page - Update Operation
router.get('/edit/:id', bookController.displayEditPage);

//Post route for process the Book Edit Page - Update Operation
router.post('/edit/:id', bookController.processEditPage);

//Get to remove the Book - Delete Operation
router.get('/delete/:id', bookController.removeBook);

module.exports = router;
