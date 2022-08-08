var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = `images/dice${randomNumber1}.png`;//image path
var image2 = `images/dice${randomNumber2}.png`;

var dice1 = document.querySelector(".img1");
var dice2 = document.querySelector(".img2");

dice1.setAttribute("src", image1);
dice2.setAttribute("src", image2);


h1 = document.querySelector("h1");//heading

if (randomNumber1 > randomNumber2){
    h1.textContent= "🚩Player 1 Wins!";
} else if (randomNumber1 === randomNumber2){
    h1.textContent= "Its a draw!";
} else{
    h1.textContent= "Player 2 Wins!🚩";
}

