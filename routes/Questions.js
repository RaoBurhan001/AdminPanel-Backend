const express= require("express");
const router= express.Router();
const subjective = require("../models/Subjective")
const objective = require("../models/Objective");
const Subjective = require("../models/Subjective");
const Objective = require("../models/Objective");
const auth = require("../controllers/auth")


router.post("/questions/objective/code" , async(req,res)=>{
    const { code } = req.body;
console.log(code)

  const question = await Objective.findOne({code:code})
  const teacher = question.teacher
  const course= question.course
  if(question)
  {
      console.log(question.teacher,question.course,"Question")
      return res.status(200).json({teacher,course})
  }
  else{
    console.log(req.body)
    res.status(401).send({ message: 'Invalid email or password' });
  }
})




router.get("/questions/objective" , async(req,res)=>{
   
    
   
    try{
    console.log(req.params.Objective)
        const question = await Objective.find()
        console.log(question)
        return res.status(200).json(question)
    }
    catch(error){
        console.log(error)
        return res.status(500).json({"error":error})
    }
    })



router.get("/questions/objective/:id" , async(req,res)=>{
    try{
    const _id = req.params.id
    const question= await Objective.findOne({_id})
    if(!question){
        return res.status(404).json({})
    } 
    else{
        return res.status(200).json(question)
    }
    }
    catch(error){
        return res.status(500).json({"error":error})   
    }
})


router.post('/questions/googlelogin' , auth.login)


router.post("/questions/objective/create" , async (req,res)=>{
    console.log(req.body)
    try{
    const {description} = req.body
    const { option1 } = req.body
    const { option2 } = req.body
    const { option3 } = req.body
    const { option4 } = req.body
    const { teacher } =req.body
    const { code } =req.body
    const { course } =req.body
    console.log(teacher)

    const objective= await Objective.create({
        description,
        option1,
        option2,
        option3,
        option4,
        teacher,
        code,
        course
    })
    console.log(description , option1,option2,option3,option4,teacher,code,course)
    return res.status(201).json(objective)

    }catch(error){
        console.log(error)
        return res.status(500).json({"error":error})
    }

})
router.put('/questions/objective/:id' , async(req,res)=>{
    try{
        const _id = req.params.id;
        const { description }= req.body
        const { option1 } = req.body
        const { option2 } = req.body
        const { option3 } = req.body
        const { option4 } = req.body
        const { teacher } =req.body
        const { code } =req.body
        const { course } =req.body
        let question = await Objective.findOne({_id})
        if(!question)
        {
            question = await Objective.create({
                description,
                option1,
                option2,
                option3,
                option4,
                code,teacher,course
            })
            return res.status(201).json(question)
        }else{
            question.description = description

           question.option1=option1,
           question.option2=option2,
           question.option3=option3,
           question.option4=option4
            await question.save()
            return res.status(200).json(question)
        }

    }catch(error){
        return res.status(500).json({"error":error.message})
    }
})



router.delete("/questions/objective/:id" , async(req,res)=>{
    try {
        const _id = req.params.id 

        const question = await Objective.deleteOne({_id})

        if(question.deletedCount === 0){
            return res.status(404).json()
        }else{
            return res.status(204).json()
        }
    } catch (error) {
        return res.status(500).json({"error":error})
    }
})

router.get("/" , (req,res)=>{
    res.send("Hello World")
})



module.exports=router