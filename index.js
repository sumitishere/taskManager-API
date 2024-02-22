const express = require('express');
const bodyParser = require('body-parser');
const app = express(); //created instance so it can be used 
const userRoutes = require('./routes/userRoutes')
const taskRoutes = require('./routes/taskRoutes')

require('dotenv').config();
require('./db')
const PORT = process.env.PORT;

app.use(bodyParser.json());
app.use('/users',userRoutes);
app.use('/tasks',taskRoutes);


//server port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.json({
        message: 'Task Manager API is working'
    })
})