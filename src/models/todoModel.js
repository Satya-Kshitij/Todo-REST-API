const { v4: uuidv4 } = require('uuid');

// In-memory data store.
// Swap this out for a real database (MongoDB, Postgres, etc.) in production.
let todos = [
  {
    id: uuidv4(),
    title: 'Learn Express.js',
    completed: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

const getAll = () => todos;

const getById = (id) => todos.find((todo) => todo.id === id);

const create = ({ title, completed = false }) => {
  const newTodo = {
    id: uuidv4(),
    title,
    completed,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  todos.push(newTodo);
  return newTodo;
};

const update = (id, updates) => {
  const todo = getById(id);
  if (!todo) return null;

  Object.assign(todo, updates, { updatedAt: new Date().toISOString() });
  return todo;
};

const remove = (id) => {
  const index = todos.findIndex((todo) => todo.id === id);
  if (index === -1) return false;

  todos.splice(index, 1);
  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
