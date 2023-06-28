const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mapSchema = new Schema ({
    mapName: {type: String, required: true},
    mapImg: {type: String, required: true},
    rooms: {type: Array, required: false},
})

module.exports = mongoose.model('Map', mapSchema)