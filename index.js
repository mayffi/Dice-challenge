const randomNumber1 = Math.floor(Math.random() * 6) + 1; //Gives 1-6

const rngDiceImg = "dice" + randomNumber1 + ".png";

const rngImgSrc = "images/" + rngDiceImg;

const image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", rngImgSrc);

const randomNumber2 = Math.floor(Math.random() * 6) + 1; //Gives 1-6

const rngImgSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", rngImgSrc2); // short form of the previous one

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins";
} // changes the original h1 to show this when player 1 wins
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 2 wins";
} else {
  document.querySelector("h1").innerHTML = "It is a draw";
}
