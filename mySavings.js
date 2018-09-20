let myMoney = window.prompt("How much money do you have?");
let myApples = window.prompt("How many apples have you bought?");
let myBread = window.prompt("How much bread have you bought?");
let applePrice = window.prompt("How much does one apple cost?") * myApples;
let breadPrice = window.prompt("How much does one bread cost?") * myBread;
let mySavings = myMoney - (applePrice + breadPrice);
if (mySavings > 0) {
	document.body.innerHTML = true;
} else {
	document.body.innerHTML = false;
}