const express = require('express')
const app = express()
const serverless = require('serverless-http');

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/.netlify/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);
