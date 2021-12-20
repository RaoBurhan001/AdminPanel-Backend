const mongoose =require("mongoose");

const SubjectiveSchema = new mongoose.Schema({
    description: String,
    answer: 
        {
             
                type: String,
                required: false
            
        }
    
})

module.exports = mongoose.model('Subjective', SubjectiveSchema)