var express = require('express');
var router = express.Router();

const indexCtrl = require('../controllers/index')
const mapsCtrl = require('../controllers/mapsController')
const ghostCtrl = require('../controllers/ghostsController')

// //CREATE new room
// router.post('/', mapCtrl.create)

//GET /maps
router.get('/maps', mapsCtrl.index);

//GET /ghosts
router.get('/ghosts', ghostCtrl.index);

//GET index 
router.get("/", indexCtrl.index);   

// //GET one
router.get('./maps/:id', mapsCtrl.show);

// //GET new
router.get('/maps/new', mapsCtrl.newRoom);

module.exports = router;

