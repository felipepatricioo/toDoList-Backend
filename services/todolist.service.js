const toDoListModel = require('./../models/todolist.model.js');

class ToDoService {

    findAll = async () => toDoListModel.find();

    findById = async (id) =>  toDoListModel.findById(id)

    createNote = async (newNote) => toDoListModel.create(newNote)

    editNote = async (id, editedNote) => toDoListModel.updateOne({ _id: id}, editedNote)

    deleteNote = async (id) => toDoListModel.deleteOne({_id: id})
}

module.exports = ToDoService