const asyncHandler = require('express-async-handler')
const Goal = require('../models/goalModel')


//@desc get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async(req,res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

//@desc set Goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field');
    }

    const goal = await Goal.create({
        text: req.body.text,
    })

    res.status(200).json(goal)
})

//@desc update Goals
//@route PUT /api/goals
//@access Private
const updateGoals = asyncHandler(async(req,res) => {
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal Not found')
    }

    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true,})

    res.status(200).json(updatedGoal)
})

//@desc delete Goals
//@route DELETE /api/goals
//@access Private
const deleteGoals = asyncHandler(async(req,res) => {    
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('Goal Not found')
    }

    const deletedGoal = await Goal.findByIdAndDelete(req.params.id)

    res.status(200).json(deletedGoal)
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}