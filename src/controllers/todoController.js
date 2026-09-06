const todoModel = require('../models/todoModel');

const getAllTodos = (req, res) => {
  const todos = todoModel.getAll();
  res.status(200).json({ success: true, count: todos.length, data: todos });
};

const getTodoById = (req, res) => {
  const todo = todoModel.getById(req.params.id);

  if (!todo) {
    return res.status(404).json({ success: false, message: 'Todo not found' });
  }

  res.status(200).json({ success: true, data: todo });
};

const createTodo = (req, res) => {
  const { title, completed } = req.body;

  if (!title || typeof title !== 'string' || !title.trim()) {
    return res
      .status(400)
      .json({ success: false, message: 'Title is required and must be a non-empty string' });
  }

  const todo = todoModel.create({ title: title.trim(), completed });
  res.status(201).json({ success: true, data: todo });
};

const updateTodo = (req, res) => {
  const { title, completed } = req.body;
  const updates = {};

  if (title !== undefined) {
    if (typeof title !== 'string' || !title.trim()) {
      return res
        .status(400)
        .json({ success: false, message: 'Title must be a non-empty string' });
    }
    updates.title = title.trim();
  }

  if (completed !== undefined) {
    if (typeof completed !== 'boolean') {
      return res.status(400).json({ success: false, message: 'Completed must be a boolean' });
    }
    updates.completed = completed;
  }

  const todo = todoModel.update(req.params.id, updates);

  if (!todo) {
    return res.status(404).json({ success: false, message: 'Todo not found' });
  }

  res.status(200).json({ success: true, data: todo });
};

const deleteTodo = (req, res) => {
  const deleted = todoModel.remove(req.params.id);

  if (!deleted) {
    return res.status(404).json({ success: false, message: 'Todo not found' });
  }

  res.status(204).send();
};

module.exports = {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo,
};
