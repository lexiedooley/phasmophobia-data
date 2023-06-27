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

//UPDATING maps > room 
async function updateMap(req, res){
	const mapUpdate = await Map.findById(req.params.id);
    try {
        const mapId = req.params.id
        const mapBody = req.body

        await Map.findByIdAndUpdate(mapId, mapBody, {runValidators: true})

        res.redirect(`/maps/${mapId}`)
    } catch(err){
        res.render('maps', {
            title: 'error',
            errorMsg: err
		})
    }
}

// EDIT MAP FOR ROOM
async function edit(req, res){
	try {
		const currentMap = await Map.findById(req.params.id)
		res.render('maps/edit', {
			map: currentMap,
			rooms: `Edit ${currentMap.rooms}`,
			errorMsg: ''
		})
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
