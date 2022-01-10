const mongoose= require('mongoose');


const ObjectiveSchema = new mongoose.Schema({
    description: String,
    teacher: { type:String,
        required:false
    },
    course:{
        type:String,
        required:false
    },
    code:{
        type:String,
        required:false
    },
    option1:{
        type:String,
        required:true
    }
    ,
    option2:{
        type:String,
        required:true
    },
    option3:{
        type:String,
        required:true
    },    
    option4:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Objective', ObjectiveSchema)