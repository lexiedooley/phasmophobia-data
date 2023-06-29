const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ghostSchema = new Schema (
{
    ghostName: {type: String, required: true},
    ghostStrengths: {type: String, required: true},
    ghostWeakness: {type: String, required: true},
    ghostEvidence: {type: String, required: true},
    ghostOccurrances: {type: Number, required: true},
})

module.exports = mongoose.model('Ghost', ghostSchema)

