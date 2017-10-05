var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ToDoSchema = new Schema({
    username: String,
    todo: String,
    isDone: Boolean,
    hasAttachment: Boolean
});

var ToDos = mongoose.model('ToDos', ToDoSchema);

module.exports = ToDos;
