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

//Get route for the Book List Page - Read Operation
router.get('/', (req, res, next) => {
    Book.find((err, booklist) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(Booklist);

            res.render('book/list', {title:'Book List', BookList: booklist});
        }
    });
});

//Get route for display the Book Add Page - Create Operation
router.get('/add', (req, res, next) => {
    res.render('book/add', {title:'Book Add'});
});

//Post route for process the Book Add Page - Create Operation
router.post('/add', (req, res, next) => {
    let newBook = Book({
        "name" : req.body.name,
        "author" : req.body.author,
        "published_year" : req.body.published_year,
        "genre" : req.body.genre,
        "price" : req.body.price
    });

    Book.create(newBook, (err, Book) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the booklist
            res.redirect('/book-list');
        }
    });
});

//Get route for display the Book Edit Page - Update Operation
router.get('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    Book.findById(id, (err, bookToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show edit view
            res.render('book/edit', {title: 'Edit Book', book: bookToEdit});
        }
    });
});

//Post route for process the Book Edit Page - Update Operation
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updatedBook = Book({
        "_id" : id,
        "name" : req.body.name,
        "author" : req.body.author,
        "published_year" : req.body.published_year,
        "genre" : req.body.genre,
        "price" : req.body.price
    });

    Book.updateOne({ _id : id}, updatedBook, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh book list
            res.redirect('/book-list');
        }
    });
});

//Get to remove the Book - Delete Operation
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Book.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh book list
            res.redirect('/book-list');
        }
    })
});

module.exports = router;
