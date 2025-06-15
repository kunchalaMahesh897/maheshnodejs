require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes.js');

const app = express();
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const database = mongoose.connection;

database.on('error', (error) => console.error(error));
database.once('connected', () => console.log('Database Connected'));

app.use(express.json());
app.use('/api', routes);

app.listen(3000, () => console.log(`Server Started at 3000`));
