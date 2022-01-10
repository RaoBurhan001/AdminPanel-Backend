


const express= require("express");
const router= express.Router();
const subjective = require("../models/Subjective")
const objective = require("../models/Objective");
const Subjective = require("../models/Subjective");
const Objective = require("../models/Objective");


exports.create = async (req, res) => {
 console.log(req.body)
 try{
 const {description} = req.body
 const { alternatives } = req.body
 const { teacher } =req.body
 const { code } =req.body
 const { course } =req.body
 console.log(teacher)

 const objective= await Objective.create({
     description,
     alternatives,
     teacher,
     code,
     course
 })
 console.log(description , alternatives,teacher,code,course)
 return res.status(201).json(objective)

 }catch(error){
     console.log(error)
     return res.status(500).json({"error":error})
 }
}