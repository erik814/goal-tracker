const asyncHandler = require('express-async-handler')

// get goals
// route: GET /api/goals
// access: private
const getGoals = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'get goals'})
});

// set goals
// route: POST /api/goals
// access: private
const setGoal = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text')
    }

    res.status(200).send('Set goal')
});

// update goals
// route: PUT /api/goals/id
// access: private
const updateGoal = asyncHandler(async (req, res) => {
    res.status(200).send({message: `update goal ${req.params.id}`})
});

// delete goals
// route: DELETE /api/goals/id
// access: private
const deleteGoal = asyncHandler(async (req, res) => {
    res.status(200).send({message: `delete goal ${req.params.id}`})
});

module.exports = {getGoals, setGoal, updateGoal, deleteGoal}