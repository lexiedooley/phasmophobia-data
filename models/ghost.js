const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ghostSchema = new Schema (
{
    ghostName: 'String',
    ghostOccurrances: Number
})

const mapSchema = new Schema 
{
    mapName: 'String',
    rooms = [
    {    
        roomName: 'String',
        roomOccurrances: Number
    }
    ]     
}

module.exports = mongoose.model('Ghost', ghostSchema)
module.exports = mongoose.model('Map', mapSchema)

