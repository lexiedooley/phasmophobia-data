const Map = require('../models/ghost')

module.exports = {
    index,
    show,
    newRoom,
    create,
    deleteRoom
}

// maps index page
async function index(req, res){
    const mapsAll = await Map.find({})
    console.log(mapsAll, 'maps all')
    const context = {
        maps: mapsAll,
		title: 'Maps'
    }
    res.render('maps/index', context)
}

//SHOW
async function show(req, res, next){
    try {

        const oneMap = await Map.findById(res.params.id)
        const context ={
        Map: oneMap,
        title: oneMap.mapName
    }
    res.render("/maps/:id", context)
    console.log('hello')
} catch(err){
    console.log(err, 'error in function show')
    res.render('maps', {
        title: 'error',
        errorMsg: err
    });
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
async function create(req,res, next){
    try {
        const { mapName, mapImg } = req.body
        console.log(req.body, 'body')
        await Map.create({
            mapName: mapName,
            mapImg: mapImg
        })
        res.redirect('/maps')
    } catch(err){
        console.log(err, 'error in function create')
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

