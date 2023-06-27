const Map = require('../models/maps')

module.exports = {
    index,
    show,
    createMap,
    deleteRoom,
    updateMap,
    edit
}

// maps index page
async function index(req, res){
    const mapsAll = await Map.find({})
    const context = {
        maps: mapsAll,
		title: 'Maps'
    }
    res.render('maps/index', context)}

//SHOW
async function show(req, res){
    try {
        const mapFind = await Map.findById(req.params.id)
        const context ={
        map: mapFind.id,
        name: mapFind.mapName,
        image: mapFind.mapImg,
        rooms: mapFind.rooms,
        title: 'Maps'
    }
    res.render('maps/show', context)
} catch(err) {
    console.log(err, 'error in show function')
  }
}


//CREATE NEW MAP
async function createMap(req,res, next){
    try {
        const { mapName, mapImg } = req.body
 
        await Map.create({
            mapName: mapName,
            mapImg: mapImg
        })
        res.redirect('/maps')
    } catch(err){
        res.render('maps', {
            title: 'error',
            errorMsg: err
        })
    }
}
//edit 
async function edit(req, res){
    try {
      const maps = await Map.findById(req.params.id)
      res.render('maps/edit/:id', {
        Maps
      })
    } catch {
      console.log('error in edit function')
    }
  }

//update map
async function updateMap(req, res){
    try {
      await Map.findByIdAndUpdate(req.params.id, req.body)
      res.redirect('/maps/edit/:id' + req.params.id)
    } catch {
      console.log('error in update function')
    }
  }

// DELETE ROOM
async function deleteRoom(req, res){
    try {
        await Map.findByIdAndDelete(req.params.id)
        res.redirect('/maps')
    } catch(err){
        console.log(err)
        res.render('error', {
			title: 'error',
			errorMsg: err.message
		})
    }
}
