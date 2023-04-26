//Package Dependencies
const express = require('express');
const app = express();

//app dependencies
//const routes = require('./routes/routes.js');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


let users = [
  {
    id: 2,
    name: 'clu',
    email: 'clu@tron.com'
  },
  {
    id: 3,
    name: 'tron',
    email: 't@tron.com'
  }
];
app.post('/users', async (req, res) => {
  const user = req.body;
  users.push(user);
  return res.send(user);
});

app.get('/users', async(req, res) => {
  return res.send(users);
})

app.put('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  const user = req.body;
  const targetElementIndex = users.findIndex(u => u.id == userId);
  users.splice(targetElementIndex, 1);
  users.push(user);
  return res.send(user);
});

app.delete('/users/:id', async (req, res) => {
  const userId = parseInt(req.params.id);
  const targetElementIndex = users.findIndex(u => u.id == userId);
  users.splice(targetElementIndex, 1);
  return res.status(204).send();
})


module.exports = app;