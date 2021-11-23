const mongoose = require('mongoose');

const toDoListSchema = new mongoose.Schema({
    title: {type: String, required:true},
    description: {type: String, required:true},
    priority: {type: String, required:true},
    status: {type: String, required: true},
    deadline: {type: Number, required:true},
    creationDate: { type: Date, default: Date.now }
}) 

const toDoListModel = mongoose.model('toDoListModel', toDoListSchema);

module.exports = toDoListModel