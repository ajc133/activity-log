/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/activities', (req, res) => {
  console.log('GET /activities');
});

app.post('/activity', (req, res) => {
  const today = new Date().toISOString();
  console.log(`${today},${req.body.button},${req.body.pressed}`);
  res.sendStatus(200);
  res.end();
});

app.listen(9000, () => { console.log('Started server'); });
