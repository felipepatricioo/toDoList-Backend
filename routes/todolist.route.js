const express = require('express');
const ToDoController = require('./../controllers/todolist.controller')

const router = express.Router();

const toDoController = new ToDoController

router.get("/", toDoController.getAll);
router.get("/:id", toDoController.getTaskById);
router.post("/register", toDoController.createNote);
router.put("/edit/:id", toDoController.editNote);
router.delete("/delete/:id", toDoController.deleteNote);




module.exports = router;