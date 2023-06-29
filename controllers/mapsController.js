const Map = require('../models/maps')

module.exports = {
    index,
    show,
    createMap,
    deleteMap,
    updateMap,
    addOccurance,
    subtractOccurance
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
      //declaring new object
      const newRoomInfo = {
      // //give roomName prop and value of what theye typed in the form
        roomName: mapBody.roomName,
      // //give occurances prop value of 1 
        occurrances: 1
      }
      
      //pushing new info into array
      const roomArr = mapData.rooms
      roomArr.push(newRoomInfo)
      

      //find document and update it
      await Map.findByIdAndUpdate( mapId, {
      //use $sett for the value of rooms
        $set: {
          rooms: roomArr,
        }
      })
      
      //declare context object
       const context = {
          rooms: roomArr,
          title: 'Maps',
          name: mapData.mapName,
          image: mapData.mapImg,
          map: mapData._id,
       }
      res.render(`maps/show`, context)
    } catch {
      console.log('error in update function')
    }
  }

// DELETE ROOM
async function deleteMap(req, res){
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

//add one occurance
async function addOccurance(req, res){
  try {
    const mapId = req.params.id
    const mapBody = req.body
    const mapData = await Map.findById(mapId)
    const roomInfo = mapData.rooms;
    const roomName = req.params.roomName

    for (let i = 0; i < roomInfo.length; i++) {
      if (roomInfo[i].roomName === roomName) {
        roomInfo[i].occurrances++
      }
    }
   
    await Map.findByIdAndUpdate( mapId, {
        $set: {
          rooms: roomInfo,
        }
      })
      const context = {
        rooms: roomInfo,
        title: 'Maps',
        name: mapData.mapName,
        image: mapData.mapImg,
        map: mapData._id,
     }
     console.log(roomInfo)
    res.render(`maps/show`, context)
  } catch {
    console.log('error in add occ function')
  }
}

//subtract one occurrance
async function subtractOccurance(req, res){
  try {
    const mapId = req.params.id
    const mapBody = req.body
    const mapData = await Map.findById(mapId)
    const roomInfo = mapData.rooms;
    const roomName = req.params.roomName

    for (let i = 0; i < roomInfo.length; i++) {
      if (roomInfo[i].roomName === roomName) {
        roomInfo[i].occurrances--
      }
    }
   
    await Map.findByIdAndUpdate( mapId, {
        $set: {
          rooms: roomInfo,
        }
      })
      const context = {
        rooms: roomInfo,
        title: 'Maps',
        name: mapData.mapName,
        image: mapData.mapImg,
        map: mapData._id,
     }
     console.log(roomInfo)
    res.render(`maps/show`, context)
  } catch {
    console.log('error in add occ function')
  }
}