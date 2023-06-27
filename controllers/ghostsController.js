const Ghost = require('../models/ghost')

module.exports = {
    index,
    createGhost,
    show
}

// get ghost index page
async function index(req, res){
    const ghostsAll = await Ghost.find({})
    const context = {
        ghosts: ghostsAll,
        title: 'Ghosts'
    }
    res.render('ghosts/index', context)
}

// create ghost
async function createGhost(req,res, next){
    try {
        const { ghostName, ghostStrengths, ghostWeakness, ghostEvidence } = req.body
        console.log(req.body, 'body')
        await Ghost.create({
            ghostName: ghostName,
            ghostStrengths: ghostStrengths,
            ghostWeakness: ghostWeakness,
            ghostEvidence: ghostEvidence
        })
        res.redirect('/ghosts')
    } catch(err){
        console.log(err, 'error')
        res.render('ghosts', {
            title: 'error',
            errorMsg: err
        })
    }
}

//SHOW
async function show(req, res){
    try {
        const ghostFind = await Ghost.findById(req.params.id)
        const context ={
        name: ghostFind.ghostName,
        strengths: ghostFind.ghostStrengths,
        weakness: ghostFind.ghostWeakness,
        evidence: ghostFind.ghostEvidence,
        occurances: ghostFind.ghostOccurrances,
        title: 'Ghosts'
    }
    res.render('ghosts/show', context)
} catch(err) {
    console.log(err, 'error')
  }
}