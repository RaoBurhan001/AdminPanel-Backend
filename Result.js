const mongoose= require('mongoose');


const ResultSchema = new mongoose.Schema({
  report: { type:String},
  Name:{type:String},
  Email:{type:String}
},
{
    timestamps: true,
})

module.exports = mongoose.model('report', ResultSchema)