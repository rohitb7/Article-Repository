var express = require('express');
var router = express.Router();

var Login = require('../models/login');



//get article by id
router.get('/:id', function(req, res, next) {
    Login.getLoginById(req.params.id, function(err, login) {
        if (err) {
            console.log(err);
        }
        res.json(login);
          console.log("hello");
    });
});