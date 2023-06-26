const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ghostSchema = new Schema (
{
    ghostName: {type: String, required: true},
    ghostOccurrances: {type: Number, required: false}
})

const mapSchema = new Schema ({
    mapName: {type: String, required: true},
    mapImg: {type: String, required: true},
    rooms: {type: Array, required: false}
})

module.exports = mongoose.model('Ghost', ghostSchema)
module.exports = mongoose.model('Map', mapSchema)

