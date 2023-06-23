var express = require('express');
var router = express.Router();

const phasmoCtrl = require('../controllers/phasmo')

//GET index 
router.get("/", phasmoCtrl.index);   

//GET one
router.get('/:id', phasmoCtrl.show)

//GET new
router.get('/maps/new', phasmoCtrl.new) 

module.exports = router;
