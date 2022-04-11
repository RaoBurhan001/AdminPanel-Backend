const mongoose= require('mongoose');


const ResultSchema = new mongoose.Schema({
  report: String
},
{
    timestamps: true,
})

module.exports = mongoose.model('report', ResultSchema)