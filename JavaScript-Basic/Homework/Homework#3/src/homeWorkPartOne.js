let givenYear = prompt("Enter Year:")
console.log("Given year:");
console.log(givenYear);

const zodiacAnimal = parseInt((givenYear -4) % 12 );
console.log("Number in Chinese Zodiac:");
console.log(zodiacAnimal);

switch (zodiacAnimal) {
    case 0:
        console.log("RAT");
        alert("You are RAT");
        break;
    case 1:
        console.log("OX");
        alert("You are OX");
        break;
    case 2:
        console.log("TIGER");
        alert("You are TIGER");
        break;
    case 3:
        console.log("RABBIT");
        alert("You are RABBIT");
        break;
    case 4:
        console.log("DRAGON");
        alert("You are DRAGON");
        break;
    case 5:
        console.log("SNAKE");
        alert("You are SNAKE");
        break;
    case 6:
        console.log("HORSE");
        alert("You are HORSE");
        break;
    case 7:
        console.log("GOAT");
        alert("You are GOAT");
        break;
    case 8:
        console.log("MONKEY");
        alert("You are MONKEY");
        break;
    case 9:
        console.log("ROOSTER");
        alert("You are ROOSTER");
        break;
    case 10:
        console.log("DOG");
        alert("You are DOG");
        break;
    case 11:
        console.log("PIG");
        alert("You are PIG")
    default:
        console.log("ALIEN!");
        alert("You are an ALIEN!")
        break;
}