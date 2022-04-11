const mongoose= require('mongoose');


const ObjectiveSchema = new mongoose.Schema({
    description: String,
    option1:{
        type:String
    },
    option2:{
        type:String
    },
    option3:{
        type:String
    },
    option4:{
        type:String
    }
}
,
{
    timestamps: true,
})

module.exports = mongoose.model('Objective', ObjectiveSchema)