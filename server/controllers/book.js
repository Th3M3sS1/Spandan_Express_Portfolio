/* File name: book.js
Name: Spandan Patel
Student Id: 301160189
Date: 28/02/2021
ExpressPortfolio - with DB
Copyright © 2021 Centennial College. All rights reserved.*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to model
let Book = require('../models/book');

module.exports.displayBookList = (req, res, next) => {
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
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('book/add', {title:'Book Add'});
}

module.exports.processAddPage = (req, res, next) => {
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
}

module.exports.displayEditPage = (req, res, next) => {
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
}

module.exports.processEditPage = (req, res, next) => {
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
}

module.exports.removeBook = (req, res, next) => {
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
}