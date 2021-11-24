const ToDoService = require('./../services/todolist.service')
const toDoService = new ToDoService

class ToDoController {
    getAll = async (req, res) => {
       let toDoList = await toDoService.findAll()
       res.status(200).send(toDoList);
    }

    getTaskById = async (req, res) => {
        let idParams = req.params.id

        let toDoTask = await toDoService.findById(idParams)

        // if(!toDoTask._id) {
        //     res.status(404).send({error: 'Note not found!'}).redirect('/')
        //     return
        // }


        res.status(200).send(toDoTask)
    }

    createNote = async (req, res) => {
        const newNote = req.body;
        await toDoService.createNote(newNote)
        .then(() => {
            res.status(201).send({
                message: 'Note Sucessfully registered!',
                newNote
            })
        })
        .catch((err) => {
                res.status(500).send({message: 'Failed to connect to server!!'});
        })
    }

    editNote = async (req, res) => {
        const editedNote = req.body;
        const idParams = req.params.id;
        await toDoService.editNote( idParams, editedNote )
        .then(() => {
            res.status(200).send({message: 'Note successfully edited'})
        })
        .catch((err) => {
            res.status(500).send({message:'Failed to connect to server!!'})
        })
    }

    deleteNote = async (req, res) => {
        const idParams = req.params.id;
        await toDoService.deleteNote(idParams)
        .then(() => {
            res.status(200).send({message: 'Note successfully deleted!!'})
        })
        .catch((err) => {
            res.status(500).send({message:'Failed to connect to server!!'})
        })
    }
}


module.exports = ToDoController