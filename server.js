const express = require('express');
const app = express();

app.use(express.static('public'));
app.post('/item/:id', (req, res) => {
  console.log(req.params.id);
  res.sendStatus(200);
})

app.listen(9000, () => { console.log('Started server')});