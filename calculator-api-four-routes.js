const express = require('express');
const app = express();

app.get('/add/:num1/:num2', (req, res) => {

  let firstNum = parseInt(req.params.num1);
  let secondNum = parseInt(req.params.num2);

  if (!firstNum || !secondNum ) {
    res.send('Numbers only please.');
  } else if (firstNum || secondNum) {
    res.send({num1: firstNum, num2: secondNum, result: firstNum+secondNum});
  }
})

app.get('/sub/:num1/:num2', (req, res) => {
  let firstNum = parseInt(req.params.num1);
  let secondNum = parseInt(req.params.num2);

  if (!firstNum || !secondNum ) {
    res.send('Numbers only please.');
  } else if (firstNum || secondNum) {
    res.send({num1: firstNum, num2: secondNum, result: firstNum-secondNum});
  }
})

app.get('/mul/:num1/:num2', (req, res) => {
  let firstNum = parseInt(req.params.num1);
  let secondNum = parseInt(req.params.num2);

  if (!firstNum || !secondNum ) {
    res.send('Numbers only please.');
  } else if (firstNum || secondNum) {
    res.send({num1: firstNum, num2: secondNum, result: firstNum*secondNum});
  }
})

app.get('/div/:num1/:num2', (req, res) => {
  let firstNum = parseInt(req.params.num1);
  let secondNum = parseInt(req.params.num2);

  if (!firstNum || !secondNum ) {
    res.send('Numbers only please.');
  } else if (firstNum || secondNum) {
    res.send({num1: firstNum, num2: secondNum, result: firstNum/secondNum});
  }
})

app.get("/*", (req, res) => {
  res.status(404).send("Four routes available, where each starts with add/sub/mul/div. Each of the routes accepts two number parameters. Ex: '/add/:num1/:num2' ")
})

app.listen(3000, () => {
  console.log("You are listening to port 3000");
})
