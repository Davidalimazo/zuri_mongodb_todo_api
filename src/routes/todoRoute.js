const express = require('express');

const router = express.Router();
const controller = require('../controllers/todoController');

router.get('/', controller.getAllTodo)
router.get('/single_todo/:id', controller.singleTodo)
router.post('/add_todo', controller.addTodo)
router.patch('/update_todo/:id', controller.updateTodo)
router.delete('/delete_todo/:id', controller.deleteTodo)

module.exports = router;

