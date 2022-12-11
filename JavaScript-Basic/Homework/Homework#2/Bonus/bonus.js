var userInputOne = parseInt(prompt("Input number one:"));
console.log("Number one:");
console.log(userInputOne);

var userInputTwo = parseInt(prompt("Input number two:"));
console.log("Number two:");
console.log(userInputTwo);

var userInputThree = parseInt(prompt("Input number three:"));
console.log("Number three:");
console.log(userInputThree);

var userInputFour = parseInt(prompt("Input number four:"));
console.log("Number four:");
console.log(userInputFour);

var userInputFive = parseInt(prompt("Input number five:"));
console.log("Number five:");
console.log(userInputFive);

if (userInputOne > userInputTwo && userInputOne > userInputTwo && userInputOne > userInputThree && userInputOne > userInputFour && userInputOne > userInputFive) {
    console.log("Maximum number is from input 1:");
    alert("Maximum number is " + " " + userInputOne);
} 
else if (userInputTwo > userInputOne && userInputTwo > userInputThree && userInputTwo > userInputFour && userInputTwo > userInputFive) {
    console.log("Maximum number is from input 2:");
    alert("Maximum number is " + " " + userInputTwo);
}
else if (userInputThree > userInputOne && userInputThree > userInputTwo && userInputThree > userInputFour && userInputThree > userInputFive) {
    console.log("Maximum number is from input 3");
    alert("Maximum number is " + " " + userInputThree);
}
else if (userInputFour > userInputOne && userInputFour > userInputTwo && userInputFour > userInputThree && userInputFour > userInputFive) {
    console.log("Maximum number is from input 4");
    alert("Maximum number is " + " " + userInputFour);
}
else if (userInputFive > userInputOne && userInputFive > userInputTwo && userInputFive > userInputThree && userInputFive > userInputFour) {
    console.log("Maximum number is from input 5");
    alert("Maximum number is " + " " + userInputFive);
}
else {
    console.log("There are at least two numbers with same value");
    alert("There are at least two numbers with same value")
}