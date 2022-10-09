require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000

// controllers
const users = require('./routes/users.js');
const characters = require('./routes/characters.js');
const movies = require('./routes/movies.js');

// database
const db = require('./db/database.js');

// database sync
(async() => {
    try {
        await db.authenticate();
        await db.sync();
        console.log('connected to db 👍');
    } catch (error) {
        throw new Error(error);
    }
})();

app.use(express.json()); //receive information
app.use(cors()); //enable other apps to do requests

//routes
app.use('/users', users);
app.use('/characters', characters);
app.use('/movies', movies);

app.listen(port, () => {
    console.log('server on papu 😎');
})