function ageCalculator(dogAge, yearsType){

    let years = "";

    if (yearsType === 'human') {
        years = dogAge * 7;
        console.log(`Your dog is ${years} years old in dog years`);

    }
    if (yearsType === 'dog') {
        years = dogAge / 7;
        console.log(`Your dog is ${years} years old in human years`);
    }

    return years; 
}

ageCalculator(2, 'human');
ageCalculator(49, 'dog');
