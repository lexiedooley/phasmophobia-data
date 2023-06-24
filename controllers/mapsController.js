const map = require('../models/ghost')

module.exports = {
    index
}


async function index(req, res){
    const mapsAll = await map.find({})
    const context = {
        maps: mapsAll,
		title: 'Maps'
    }
    res.render('maps/index', context)
}