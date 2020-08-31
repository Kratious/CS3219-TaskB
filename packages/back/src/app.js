import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Todo from './models/Todo';

const app = express();
app.use(cors()); // TODO: temporarily enable for all
app.use(bodyParser.json());

app.get('/', (req, res) => Todo.query().then((todos) => {
  res.json(todos);
}));

app.post('/', (req, res) => Todo.query().insert({
  name: req.body.name,
}).then(() => res.json({ statusCode: 204 })).catch((error) => {
  console.log(error);
  return res.json({ statusCode: 400 });
}));

module.exports = app;
