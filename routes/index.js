var express = require('express');
var router = express.Router();

const indexCtrl = require('../controllers/index')
const mapsCtrl = require('../controllers/mapsController')
const ghostCtrl = require('../controllers/ghostsController')

// //CREATE new map
router.post('/maps', mapsCtrl.createMap)

// UPDATE for new room
router.post('/maps/:id', mapsCtrl.updateMap)

// EDIT MAPS TO ADD ROOM 
router.post('/maps/edit/:id', mapsCtrl.edit)

// CREATE new ghost
router.post('/ghosts', ghostCtrl.createGhost)

// Delete Map
router.delete('/:id', mapsCtrl.deleteRoom)

//GET one map
router.get('/maps/:id', mapsCtrl.show); 

//GET one ghost
router.get('/ghosts/:id', ghostCtrl.show); 

//GET /maps
router.get('/maps', mapsCtrl.index);

//GET /ghosts
router.get('/ghosts', ghostCtrl.index);

//GET index 
router.get("/", indexCtrl.index);   

// // //GET new
// router.get('/maps:', mapsCtrl.newRoom);


module.exports = router;

