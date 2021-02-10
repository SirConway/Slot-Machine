var slot1 = document.getElementById('slot1');
var slot2 = document.getElementById('slot2');
var slot3 = document.getElementById('slot3');
var bet = document.getElementById('bet');
var winnings = document.getElementById('winnings');
var betPlus = document.getElementById('betPlus');
var betMinus = document.getElementById('betMinus');
var coins = document.getElementById('coins');
var totalWinnings = document.getElementById('totalWinnings');
var spin = document.getElementById('spin');
var heading = document.getElementById('heading')
var status = document.getElementById('status')
var betVal = 0;
var tempWinnings = 0;
var totalWinningsVal = 0;
var coinVal = 100;

bet.innerHTML = betVal;
coins.innerHTML = coinVal;
winnings.innerHTML = tempWinnings;
totalWinnings.innerHTML = totalWinningsVal;

function betPlusFunction(){
betVal += 1;
bet.innerHTML = betVal;
}
function betMinusFunction(){
betVal -= 1;
bet.innerHTML = betVal;
}
function addTotalsFunction(){
coinVal = coinVal + totalWinningsVal;
totalWinningsVal = 0;
totalWinnings.innerHTML = totalWinningsVal;
coins.innerHTML = coinVal;
}
function spinFunction(){
if(coinVal >= betVal){
slot1.innerHTML = Math.floor(Math.random() * 10);
slot2.innerHTML = Math.floor(Math.random() * 10);
slot3.innerHTML = Math.floor(Math.random() * 10);
coinVal -= betVal;
coins.innerHTML = coinVal;
tempWinnings = 0;
winnings.innerHTML = tempWinnings;
if(slot1.innerHTML == slot2.innerHTML && slot2.innerHTML == slot3.innerHTML && slot1.innerHTML == 7){
  tempWinnings = betVal*10;
  heading.innerHTML = "TRIPLE DONK! ";
  status.innerHTML = "Three 7's";
} else if(slot1.innerHTML == slot2.innerHTML && slot2.innerHTML == slot3.innerHTML){
  tempWinnings = betVal*6
  heading.innerHTML = "Triple Match";
  status.innerHTML = "Three identical numbers.";
} else if(slot1.innerHTML == slot3.innerHTML){
  tempWinnings = betVal*2;
  heading.innerHTML = "DOUBLE DONK! x2";
  status.innerHTML = "Two 7's";
} else if(slot1.innerHTML == slot2.innerHTML || slot2.innerHTML == slot3.innerHTML){
  tempWinnings = betVal*2;
  heading.innerHTML = "Double Match";
  status.innerHTML = "Two identical numbers.";
} else if(slot1.innerHTML == 7 || slot2.innerHTML == 7 || slot3.innerHTML == 7){
  tempWinnings = betVal;
  heading.innerHTML = "DONK!";
  status.innerHTML = "One 7";
} else{
  heading.innerHTML = "Ouch!";
  status.innerHTML = "Wow look! Nothing!";
}
winnings.innerHTML = tempWinnings;
totalWinningsVal += tempWinnings;
totalWinnings.innerHTML = totalWinningsVal;
//coinVal += tempWinnings;
}}
addWinningsButton.addEventListener('click', addTotalsFunction, false);
betPlus.addEventListener('click', betPlusFunction, false);
betMinus.addEventListener('click', betMinusFunction, false);
spin.addEventListener('click', spinFunction, false);
