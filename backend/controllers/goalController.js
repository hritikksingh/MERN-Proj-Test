const asyncHandler = require('express-async-handler')


//@desc get Goals
//@route GET /api/goals
//@access Private
const getGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message : 'Get Goal'})
})

//@desc set Goals
//@route POST /api/goals
//@access Private
const setGoals = asyncHandler(async(req,res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('please add a text field');
    }
    res.status(200).json({message : 'Set Goal'})
})

//@desc update Goals
//@route PUT /api/goals
//@access Private
const updateGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message : `Update Goal ${req.params.id}`})
})

//@desc delete Goals
//@route DELETE /api/goals
//@access Private
const deleteGoals = asyncHandler(async(req,res) => {
    res.status(200).json({message : `Delete Goal ${req.params.id}`})
})


module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}