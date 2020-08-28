import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors()); // TODO: temporarily enable for all
app.use(bodyParser.json());

app.get('/', (req, res) => res.json([{ id: 1, name: 'task1' }, { id: 2, name: 'task2' }, { id: 3, name: 'task3' }]));

module.exports = app;
