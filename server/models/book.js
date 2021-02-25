/* File name: book.js
Name: Spandan Patel
Student Id: 301160189
Date: 24/02/2021
ExpressPortfolio - with DB
Copyright © 2021 Centennial College. All rights reserved.*/

let mongoose = require('mongoose');

//create model class
let booksModel = mongoose.Schema({
    name: String,
    author: String,
    published_year: String,
    genre: String,
    price: String
}, 
{
    collection : "books"
});

module.exports = mongoose.model('Book', booksModel);