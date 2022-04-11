const mongoose =require("mongoose");

const SubjectiveSchema = new mongoose.Schema({
    description: String,
    answer: 
        {
             
                type: String,
                required: false
            
        }
    
},
{
        timestamps: true,
    })

module.exports = mongoose.model('Subjective', SubjectiveSchema)