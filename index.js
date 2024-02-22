const express = require('express');
const bodyParser = require('body-parser');
const app = express(); //created instance so it can be used 

require('dotenv').config();
require('./db')
const PORT = process.env.PORT;

app.use(bodyParser.json());




//server port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.json({
        message: 'Task Manager API is working'
    })
})