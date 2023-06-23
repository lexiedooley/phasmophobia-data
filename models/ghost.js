const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ghostSchema = new Schema (
{
    name: 'String',
    occurrances: Number
})

module.exports = mongoose.model('Ghost', ghostSchema)

