const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  healthCheck
} = require('../controllers/todoController');

router.get('/todos', getAllTodos);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);
router.delete('/todos/:id', deleteTodo);

router.get('/health', healthCheck);

module.exports = router;
