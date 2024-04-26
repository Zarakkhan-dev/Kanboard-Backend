const mongoose = require('mongoose');

const todoDataSchema = new mongoose.Schema({
  id: String,
  todoname: String
});

const workplaceTodoSchema = new mongoose.Schema({
  id: String,
  name: String,
  data: [todoDataSchema]
});

const workplaceSchema = new mongoose.Schema({
  WorkplaceName: String,
  WorkplaceTodo: [workplaceTodoSchema]
});

module.exports = mongoose.model('Workplace', workplaceSchema);