var express = require('express');
var router = express.Router();

const indexCtrl = require('../controllers/index')
const mapsCtrl = require('../controllers/mapsController')
const ghostCtrl = require('../controllers/ghostsController')

// //CREATE new room
router.post('/maps', mapsCtrl.create)

// Delete Map
router.delete('/:id', mapsCtrl.deleteRoom)

// //GET one
router.get('/maps/:id', mapsCtrl.show);

//GET /maps
router.get('/maps', mapsCtrl.index);

//GET /ghosts
router.get('/ghosts', ghostCtrl.index);

//GET index 
router.get("/", indexCtrl.index);   

// //GET new
router.get('/maps:', mapsCtrl.newRoom);


module.exports = router;

