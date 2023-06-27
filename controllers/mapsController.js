const Map = require('../models/maps')

module.exports = {
    index,
    show,
    newRoom,
    createMap,
    deleteRoom
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
        name: mapFind.mapName,
        image: mapFind.mapImg,
        rooms: mapFind.rooms,
        title: 'Maps'
    }
    res.render('maps/show', context)
} catch(err) {
    console.log(err, 'error')
  }
}


//NEW ROOM
function newRoom(req, res){
    res.render('/maps', {
        errorMsg: '',
        title: 'New Room'
    })
}

//CREATE NEW MAP
async function createMap(req,res, next){
    try {
        const { mapName, mapImg } = req.body
        console.log(req.body, 'body')
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

