function ageCalculator(years, yearsType){
    let dogYears = years * 7;
    if(yearsType === 'dog'){
        dogYears = years / 7;
    }
    console.log(dogYears);
    alert("Your dog`s age is " + dogYears + " years");
}

ageCalculator(50, 'dog');