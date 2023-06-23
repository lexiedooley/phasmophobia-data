const Ghost = require("../models/ghost")

module.exports = {
    index
}

async function index(req, res){
    const ghostsAll = await Ghost.find({})
    const context = { 
        ghosts: ghostsAll,
        title: 'Ghosts'
    }
    res.render('ghosts/index', context)
}