function rollDiceOne() {
  var die1 = Math.ceil(Math.random() * 6);
  var dieImage1 = "images/dice" + die1 + ".png"
  document.getElementById("dice-one").setAttribute("src", dieImage1);
  var die2 = Math.ceil(Math.random() * 6);
  var dieImage2 = "images/dice" + die2 + ".png"
  document.getElementById("dice-two").setAttribute("src", dieImage2);

  if (die1 > die2) {
    document.querySelector("h1.heading").innerHTML = "Player One Wins!";
    document.getElementById("p1").innerHTML = "<strong>Player One 🚩</strong>";
    document.getElementById("p2").innerHTML = "Player Two";
  } else if (die1 < die2) {
    document.querySelector("h1.heading").innerHTML = "Player Two Wins!";
    document.getElementById("p1").innerHTML = "Player One";
    document.getElementById("p2").innerHTML = "<strong>Player Two 🚩</strong>";
  } else {
    document.querySelector("h1.heading").innerHTML = "Draw!";
    document.getElementById("p1").innerHTML = "Player One";
    document.getElementById("p2").innerHTML = "Player Two";
  }
}

// window.onload = rollDiceOne;


// function firstDie() {
//   var diceRoll = Math.ceil(Math.random() * 6);
//   console.log(diceRoll);
//   var diceClass = "dice" + diceRoll;
//   console.log(diceClass);
//   document.querySelector(diceClass).classList.toggle("visible");
// }"
//
// function secondDie() {
//   var diceRoll = Math.floor(Math.random() * 6);
//   document.querySelector("dice" + diceRoll).classList.toggle("visible");
// }
//
// window.onload = firstDie;
