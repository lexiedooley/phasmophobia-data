const Map = require('../models/maps')

module.exports = {
    index,
    show,
    createMap,
    deleteRoom,
    updateMap,
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
        map: mapFind._id,
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
        console.log('your mother')
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

//update map
async function updateMap(req, res){
  try {
      const mapId = req.params.id
      const mapBody = req.body
    
      const mapData = await Map.findById(mapId)

//////////////
      //declaring new object
      const newArr = {
      //give roomName prop and value of what theye typed in the form
        roomName: mapBody,
      //give occurances prop value of 1 
        occurrances: 1, 
      }
      console.log(newArr)
      //find document and update it
      await Map.findByIdAndUpdate( mapId, {
        //use $sett for the value of rooms
        $set: {
          rooms: newArr,
        }
      })
       const context = {
          name: newArr.roomName,
          occurances: newArr.occurrances
       }
      res.render(`maps/show`, context)
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
