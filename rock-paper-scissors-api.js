const express = require('express');
const app = express();

app.get('/:choice', (req, res) => {
  const aiRPS = ['rock', 'paper', 'scissors']
  let aiChoice = aiRPS[Math.floor(Math.random()*3)]
  let result;

  if(req.params.choice === aiChoice){
    result = "Tie!"
  } else if (req.params.choice === "rock" && aiChoice === "paper"){
    result = "Ai Wins!"
  } else if (req.params.choice === "rock" && aiChoice === "scissors"){
    result = "You Win!"
  } else if (req.params.choice === "paper" && aiChoice === "scissors"){
    result = "Ai Wins!"
  } else if (req.params.choice === "paper" && aiChoice === "rock"){
    result = "You Win!"
  } else if (req.params.choice === "scissors" && aiChoice === "paper"){
    result = "You Win!"
  } else if (req.params.choice === "scissors" && aiChoice === "rock"){
    result = "Ai Wins!"
  }

  res.json([{user: req.params.choice, ai : aiChoice, result : result}])

})

app.listen(3000, () => {
  console.log("You are listening to port 3000");
})
