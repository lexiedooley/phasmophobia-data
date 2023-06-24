const map = require('../models/ghost')

module.exports = {
    index,
    show,
    newRoom
}

// maps index page
async function index(req, res){
    const mapsAll = await map.find({})
    const context = {
        maps: mapsAll,
		title: 'Maps'
    }
    res.render('maps/index', context)
}

//SHOW
async function show(req, res){
    try {
        const mapFind = await map.findById(res.params.id)
        const context ={
        map: mapFind,
        title: mapFind.mapName
    }
    res.render('maps/show', context)
} catch(err){
    res.render('error', {
        title: 'error',
        errorMsg: err.message
    });
}
}

//NEW ROOM
function newRoom(req, res){
    res.render('maps/new', {
        errorMsg: '',
        title: 'New Room'
    })
}

