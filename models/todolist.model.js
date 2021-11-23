const mongoose = require('mongoose');

const toDoListSchema = new mongoose.Schema({
    title: {type: String, required:true},
    description: {type: String, required:true},
    priority: {type: String},
    status: {type: String},
    deadline: {type: Number},
    creationDate: { type: Date, default: Date.now }
}) 

const toDoListModel = mongoose.model('toDoListModel', toDoListSchema);

module.exports = toDoListModel