//IMPORTS
if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express');
const cors = require('cors');
const toDoListRouter = require('./routes/todolist.route')
const Conn = require('./conn/conn')

//CONSTANTS
const port = process.env.PORT || 3003
const app = express();

//MIDDLEWARES
app.use(express.json());
app.use(cors())


//DB
const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;
Conn(db_url, db_user, db_pass, db_data)

//ROUTES
app.use("/", toDoListRouter)


app.listen(port, () => {
    console.log(`Server runninng on door ${port}`)
})
