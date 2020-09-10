import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import Todo from './models/Todo';

const app = express();
app.use(cors()); // TODO: temporarily enable for all
app.options('*', cors());
app.use(bodyParser.json());

app.get('/', (req, res) => Todo.query().orderBy('id', 'asc').then((todos) => {
  res.json(todos);
}));

app.post('/', (req, res) => Todo.query().insert({
  name: req.body.name,
}).then(() => res.json({ statusCode: 204 })).catch((error) => {
  console.log(error);
  return res.json({ statusCode: 400 });
}));

app.put('/', (req, res) => {
  Todo.query().findById(req.body.id).patch({
    name: req.body.name,
  }).then(() => res.json({ statusCode: 204 }))
    .catch((error) => {
      console.log(error);
      return res.json({ statusCode: 400 });
    });
});

app.put('/complete', (req, res) => {
  Todo.query().findById(req.body.id).patch({
    completed: req.body.completed,
  }).then(() => res.json({ statusCode: 204 }))
    .catch((error) => {
      console.log(error);
      return res.json({ statusCode: 400 });
    });
});

app.delete('/', cors(), (req, res) => {
  Todo.query().deleteById(req.query.id)
    .then(() => res.json({ statusCode: 204 }))
    .catch((error) => {
      console.log(error);
      return res.json({ statusCode: 400 });
    });
});

module.exports = app;
