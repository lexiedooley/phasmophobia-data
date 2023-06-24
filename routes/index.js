var express = require('express');
var router = express.Router();

const indexCtrl = require('../controllers/index')
const mapsCtrl = require('../controllers/mapsController')
const ghostCtrl = require('../controllers/ghostsController')

// //CREATE new room
// router.post('/', phasmoCtrl.create)

//GET /maps
router.get('/maps', mapsCtrl.index);

//GET /ghosts
router.get('/ghosts', ghostCtrl.index);

//GET index 
router.get("/", indexCtrl.index);   

// //GET one
// router.get('./maps/:id', phasmoCtrl.show);

// //GET new
// router.get('/maps/new', phasmoCtrl.newRoom);

module.exports = router;

