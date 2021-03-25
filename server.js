/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const csv = require('csv-parser');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const app = express();

const PORT = 9000;

const csvWriter = createCsvWriter({
  path: 'data.csv',
  header: [
    { id: 'timestamp', title: 'datetime' },
    { id: 'activity', title: 'activity' },
    { id: 'pressed', title: 'pressed' },
  ],
});

function writeLines(activities) {
  csvWriter
    .writeRecords(activities)
    .then(() => console.log('The CSV file was written successfully'));
}

function storeActivities(activities) {
  writeLines(activities);
}

app.use(express.static('public'));
app.use(bodyParser.json());
app.get('/activities', (req, res) => {
  console.log('GET /activities');
});

app.post('/activity', (req, res) => {
  storeActivities(req.body.activities);
  res.sendStatus(200);
  res.end();
});

app.listen(9000, () => { console.log(`Started server on port ${PORT}`); });
