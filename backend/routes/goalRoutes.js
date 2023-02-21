const express = require('express');
const router = express.Router();
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')


router.route('/').get(getGoals).post(setGoal);

// //get
// router.get('/', getGoals)
// //create
// router.post('/', setGoal)

router.route('/:id').delete(deleteGoal).put(updateGoal);

// //update
// router.put('/:id', updateGoal)
// //delete
// router.get('/:id', deleteGoal)


module.exports = router