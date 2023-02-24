document.addEventListener("DOMContentLoaded", function (event) {
  let dice = document.getElementsByClassName("dice");
  for (let i = 0; i < dice.length; i++) {
    dice[i].style.display = "none";
  }
  dice[Math.floor(Math.random() * dice.length)].style.display = "flex";
  dice[Math.floor(Math.random() * dice.length)].style.display = "flex";
});
