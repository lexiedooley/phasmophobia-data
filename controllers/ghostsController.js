const Ghost = require('../models/ghost')

module.exports = {
    index,
    createGhost,
    show,
    subtractGhostOccurance,
   addOccurance
}

// get ghost index page
async function index(req, res){
    const ghostsAll = await Ghost.find({})
    const context = {
        ghosts: ghostsAll,
        id: ghostsAll._id,
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
            ghostEvidence: ghostEvidence,
            ghostOccurrances: 0
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
        id: ghostFind._id,
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

// remove occurence 
async function subtractGhostOccurance(req, res){
    try {
      const ghostId = req.params.id
      const ghostData = await Ghost.findById(ghostId)
      const ghostUpdate = ghostData.ghostOccurrances

      
      for (let i = 0; i < ghostData.length; i++) {
          if (ghostId[i] === ghostId) {
              ghostData[i].ghostOccurrances--
            }
        }
        console.log(ghostData, 'yoooo')
        await Ghost.findByIdAndUpdate( ghostId, {
            $set: {
                ghostOccurrances: ghostOccurrances,
            }
        })
        const context = {
            id: ghostData._id,
            name: ghostData.ghostName,
            strengths: ghostData.ghostStrengths,
            weakness: ghostData.ghostWeakness,
            evidence: ghostData.ghostEvidence,
            occurances: ghostData.ghostOccurrances,
            title: 'Ghosts'
       }
       console.log(roomInfo)
      res.render(`ghosts/index`, context)
    } catch {
      console.log('error in add occ function')
    }
  }

  // add ghost occurance
  async function addOccurance(req, res){
    try {
      const ghostId = req.params.id
      const ghostData = await Ghost.findById(ghostId)
      const ghostUpdate = ghostData.ghostOccurrances

      
      for (let i = 0; i < ghostData.length; i++) {
          if (ghostId[i] === ghostId) {
              ghostData[i].ghostOccurrances++
            }
        }
        console.log(ghostData, 'yoooo')
        await Ghost.findByIdAndUpdate( ghostId, {
            $set: {
                ghostOccurrances: ghostUpdate,
            }
        })
        const context = {
            id: ghostData._id,
            name: ghostData.ghostName,
            strengths: ghostData.ghostStrengths,
            weakness: ghostData.ghostWeakness,
            evidence: ghostData.ghostEvidence,
            occurances: ghostData.ghostOccurrances,
            title: 'Ghosts'
       }
       console.log(roomInfo)
      res.render(`ghosts/index`, context)
    } catch {
      console.log('error in add occ function')
    }
  }