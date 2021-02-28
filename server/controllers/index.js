/* File name: index.js
Name: Spandan Patel
Student Id: 301160189
Date: 28/02/2021
ExpressPortfolio - with DB
Copyright © 2021 Centennial College. All rights reserved.*/

let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title : 'Home'});
}

module.exports.displayServicePage = (req, res, next) => {
    res.render('services', { title: 'Services' });
}

module.exports.displayProjectPage = (req, res, next) => {
    res.render('projects', { title: 'Projects' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact' });
}

module.exports.displayInfoPage = (req, res, next) => {
    res.render('info', {title: 'Info'});
}