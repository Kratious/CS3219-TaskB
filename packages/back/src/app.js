import express from 'express';
import bodyParser from 'body-parser';

const app = express();

app.get('/', (req, res) => res.json("Hello World!"));

module.exports = app;