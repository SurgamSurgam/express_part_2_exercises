const express = require('express');
const app = express();
const port = 3000;

app.get('/:operator/:num1/:num2', (req, res) => {

  let opertr = req.params.operator;
  let firstNum = parseInt(req.params.num1);
  let secondNum = parseInt(req.params.num2);

  if (!firstNum || !secondNum ) {
    res.send('Numbers only please.');
  } else {
    switch (opertr) {
      case '+': res.send({num1: firstNum, num2: secondNum, operator: opertr, result: firstNum+secondNum})
        break;

      case '-': res.send({num1: firstNum, num2: secondNum, operator: opertr, result: firstNum-secondNum})
        break;

      case '*': res.send({num1: firstNum, num2: secondNum, operator: opertr, result: firstNum*secondNum})
        break;

      case '/': res.send({num1: firstNum, num2: secondNum, operator: opertr, result: firstNum/secondNum})
        break;
      default: res.send('the operator is not supported. Only +, -, /, * ')

    }
  }
})


app.listen(port, () => {
  console.log(`You are listening to port ${port}`);
})
