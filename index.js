require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
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
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).json(`Serveris veikia an port ${PORT}`);
});

// create new user
app.post('/users/new', (req, res) => {
  console.log(req.body);

  const newUser = new UserModel(req.body);

  newUser
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
});

// get all users
app.get('/users', async (req, res) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// delete user

app.delete('/users/delete/:id', async (req, res) => {
  await UserModel.findOneAndDelete({ _id: req.params.id });
  res.send({ success: true, msg: `User has been deleted.` });
});

app.listen(PORT, console.log(`Back end online on port ${PORT}`));
