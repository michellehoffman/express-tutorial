const express = require('express');
const path = require('path');
const data = require('./data.js');
const app = express();

const urlLogger = (request, response, next) => {
  console.log('Request URL: ', request.url);
  next();
};

const timeLogger = (request, response, next) => {
  console.log('Datetime: ', new Date(Date.now()).toString());
  next();
};

const errorHandler = (req, res, next) => {
  res.status(404).send('404 Page Not Found');
};

app.use(urlLogger, timeLogger);
app.use(express.static('public'));

app.get('/', (request, response) => {});

app.get('/json', (request, response) => {
  response.status(200).json(data);
});

app.get('/sunsets', (request, response) => {
  response.sendFile(path.join(__dirname + '/public/sunsets.html'));
})

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Express intro running on localhost:3000');
});