require('dotenv').config();
const express = require('express');
const connectToDb = require('./config/connectToDb');

const app = express();

connectToDb();

app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.post('/bankAccount', (req, res) => {
    
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});