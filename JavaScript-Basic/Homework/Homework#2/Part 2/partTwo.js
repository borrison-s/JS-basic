var givenYear = prompt("Enter year:");
console.log("Given Year:");
console.log(givenYear);

var zodiacAnimal = parseInt((givenYear - 4) % 12);
console.log("Number:");
console.log(zodiacAnimal);

if (zodiacAnimal == 0) {
    console.log("You are  RAT");
    alert("RAT");
} 
else if (zodiacAnimal == 1) {
    console.log("You are OX");
    alert("OX");
}
else if (zodiacAnimal == 2) {
    console.log("You are TIGER");
    alert("TIGER");
}
else if (zodiacAnimal == 3) {
    console.log("You are RABBIT");
    alert("RABBIT");
}
else if (zodiacAnimal == 4) {
    console.log("You are DRAGON");
    alert("DRAGON");
}
else if (zodiacAnimal == 5) {
    console.log("You are SNAKE");
    alert("SNAKE");
}
else if (zodiacAnimal == 6) {
    console.log("You are HORSE");
    alert("HORSE");
}
else if (zodiacAnimal == 7) {
    console.log("You are GOAT");
    alert("GOAT");
}
else if (zodiacAnimal == 8) {
    console.log("You are MONKEY");
    alert("MONKEY");
}
else if (zodiacAnimal == 9) {
    console.log("You are ROOSTER");
    alert("ROOSTER");
}
else if (zodiacAnimal == 10) {
    console.log("You are DOG");
    alert("DOG");
}
else if (zodiacAnimal == 11) {
    console.log("You are PIG");
    alert("PIG");
}
else {
    console.log("You are an ALIEN!");
    alert("You are an ALIEN");
}
