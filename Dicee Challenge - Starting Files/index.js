var randomNumber1 = Math.floor((Math.random()*6)+1);//dice number 1-6 for player 1
var randomNumber2 = Math.floor((Math.random()*6)+1);//dice number 1-6 for player 2
//selecting the tag of the image
var firstDice = document.querySelectorAll("img")[0];
//using concatination for setting an attibute, with setters, you use 2 inputs in the (), the key and value
firstDice.setAttribute("src","images/dice"+randomNumber1+ ".png"); //src,images/dice1.png
// for the second dice
var secondDice = document.querySelectorAll("img")[1];
secondDice.setAttribute("src","images/dice"+randomNumber2+ ".png");
//using if statements to determine the winner, querySelector to get the tag and innerText to change the display for the winner
if(randomNumber1>randomNumber2){
  document.querySelector('h1').innerText="🚩Player 1 wins!";
}else if (randomNumber2>randomNumber1){
  document.querySelector('h1').innerText="Player 2 wins! 🚩";
}else {
  document.querySelector('h1').innerText="🚩Draw!🚩";
}
