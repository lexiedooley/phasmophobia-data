var express = require('express');
var router = express.Router();

const indexCtrl = require('../controllers/index')
const mapsCtrl = require('../controllers/mapsController')
const ghostCtrl = require('../controllers/ghostsController')

// UPDATE for new room
router.post('/maps/edit/:id', mapsCtrl.updateMap)

//CREATE new map
router.post('/maps', mapsCtrl.createMap)


// CREATE new ghostx
router.post('/ghosts', ghostCtrl.createGhost)

// Delete Map
router.post('/maps/delete/:id', mapsCtrl.deleteMap)

// adding occurance to room
router.post('/maps/add/:id/:roomName', mapsCtrl.addOccurance)

// removing occurance from room
router.post('/maps/subtract/:id/:roomName', mapsCtrl.subtractOccurance)

// adding occurance to ghost
router.post('/ghosts/add/:id', ghostCtrl.addOccurance)

//removing occurance from ghost
router.post('/ghosts/subtract/:id', ghostCtrl.subtractGhostOccurance)

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


module.exports = router;

