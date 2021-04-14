/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 9000;

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/activities', (req, res) => {
  console.log('GET /activities');
});

app.post('/activity', (req, res) => {
  res.sendStatus(200);
  res.end();
});

app.listen(9000, () => { console.log(`Started server on port ${PORT}`); });
