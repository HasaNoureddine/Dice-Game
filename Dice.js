document.addEventListener("DOMContentLoaded", function (event) {
  let dice = document.getElementsByClassName("dice");
  let Dice = document.getElementsByClassName("Dice");

  for (let i = 0; i < dice.length; i++) {
    dice[i].style.display = "none";
  }
  for (let i = 0; i < Dice.length; i++) {
    Dice[i].style.display = "none";
  }
  roll1 = Math.floor(Math.random() * dice.length);
  roll2 = Math.floor(Math.random() * Dice.length);
  dice[roll1].style.display = "flex";
  Dice[roll2].style.display = "flex";

  if (roll1 > roll2) {
    document.getElementById("status").innerHTML = `🤪 PLAYER 1 WINS! `;
  } else if (roll1 < roll2) {
    document.getElementById("status").innerHTML = `PLAYER 2 WINS! 🤪`;
  } else {
    document.getElementById("status").innerHTML = `IT IS A DRAW!`;
  }
});
