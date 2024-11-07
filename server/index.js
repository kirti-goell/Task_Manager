//all requirements 
const express = require('express')

const {verifyEmail , verifyUserName , verification } = require('./middlewareFile.js')
const {register, login , userTasks, newTask,updateTask,deleteTask} = require('./endPointsFile.js')
//all declarations
const port = 5000
const app = express();

//all middlewares
app.use('/register',verifyEmail,verifyUserName)
app.use('/tasks',verification)




//all endpoints
app.post('/register' ,register)
app.post('/login',login)
app.get('/tasks',userTasks)
app.post('/tasks',newTask)
app.put('/tasks/:id',updateTask)
app.delete('/tasks/:id',deleteTask)















app.listen(port,()=>{
    console.log("server is running on port no. " + port);
})