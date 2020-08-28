import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(cors()); // TODO: temporarily enable for all
app.use(bodyParser.json());

app.get('/', (req, res) => res.json('Hello World!'));

module.exports = app;
