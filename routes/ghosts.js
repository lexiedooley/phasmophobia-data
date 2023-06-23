var express = require('express');
var router = express.Router();

const ghostCtrl = require('../controllers/ghosts')

//GET index 
router.get("/", ghostCtrl.index);

module.exports = router;
