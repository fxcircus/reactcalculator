var express = require('express');
var app = express();

// Addition
app.get('/add/:num1/:num2', function (req, res) {
  const { num1, num2 } = req.params;
  const result = parseFloat(num1) + parseFloat(num2);
  res.status(200).send(`Result: ${result}`);
});

// Subtraction
app.get('/subtract/:num1/:num2', function (req, res) {
  const { num1, num2 } = req.params;
  const result = parseFloat(num1) - parseFloat(num2);
  res.status(200).send(`Result: ${result}`);
});

// Multiplication
app.get('/multiply/:num1/:num2', function (req, res) {
  const { num1, num2 } = req.params;
  const result = parseFloat(num1) * parseFloat(num2);
  res.status(200).send(`Result: ${result}`);
});

// Division
app.get('/divide/:num1/:num2', function (req, res) {
  const { num1, num2 } = req.params;
  if (parseFloat(num2) === 0) {
    res.status(400).send('Division by zero error.');
  } else {
    const result = parseFloat(num1) / parseFloat(num2);
    res.status(200).send(`Result: ${result}`);
  }
});

var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Calculator app listening at port %s', port);
});

module.exports = server;
