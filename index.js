require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const UserModel = require('./models/UserSchema');
const app = express();

const PORT = 4000;

// prisijungimas prie duomenu bazes
mongoose
  .connect(process.env.MONGO_CONNECT_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('Conneced to Mongo ooooooooose');
  })
  .catch((err) => console.error(err.message));

// MIddleware
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json(`Serveris veikia an port ${PORT}`);
});

// create new user
app.post('/users/new', (req, res) => {
  console.log(req.body);

  const newUser = new UserModel({
    userName: 'Tomas30',
    age: 30,
    email: 'Tomas@gmail.com',
    password: 'Tomas1',
  });

  newUser
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

app.listen(PORT, console.log(`Back end online on port ${PORT}`));
