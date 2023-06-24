var express = require('express');
var router = express.Router();

module.exports = {
    index
}

//get main index page
function index (req, res, next) {
    res.render('index', { title: 'Phasmophobia App' });
  };

