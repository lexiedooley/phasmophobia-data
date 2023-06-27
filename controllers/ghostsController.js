const Ghost = require('../models/ghost')

module.exports = {
    index,
    createGhost
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