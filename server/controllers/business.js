/* File name: business.js
Name: Spandan Patel
Student Id: 301160189
Date: 28/02/2021
ExpressPortfolio - with DB
Copyright © 2021 Centennial College. All rights reserved.*/

let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to model
let Business = require('../models/business');

module.exports.displayBusinessList = (req, res, next) => {
    Business.find((err, businessList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BusinessList);

            res.render('business/list', {title:'Business Contact List', BusinessList: businessList, displayName: req.user ? req.user.displayName : ''});
        }
    }).sort({"name" : 1});
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('business/add', {title:'Add Business Contact List', displayName: req.user ? req.user.displayName : ''});
}

module.exports.processAddPage = (req, res, next) => {
    let newBusiness = Business({
        "name" : req.body.name,
        "contact_no": req.body.contact_no,
        "email": req.body.email
    });

    Business.create(newBusiness, (err, Business) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh the businesslist
            res.redirect('/business-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Business.findById(id, (err, businessToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show edit view
            res.render('business/edit', {title: 'Edit Business Contact List', business: businessToEdit, displayName: req.user ? req.user.displayName : ''});
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedBusiness = Business({
        "_id": id,
        "name": req.body.name,
        "contact_no": req.body.contact_no,
        "email": req.body.email
    });

    Business.updateOne({ _id : id}, updatedBusiness, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh business list
            res.redirect('/business-list');
        }
    });
}

module.exports.removeBusiness = (req, res, next) => {
    let id = req.params.id;

    Business.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //refresh business list
            res.redirect('/business-list');
        }
    });
}