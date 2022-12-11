function calculateAge(birthYear, currentYear){
    let yearsOld = currentYear  - birthYear;
    console.log("You are " + yearsOld + " years old.");
    alert("You are " + yearsOld + " years old.");
}

calculateAge(1988, new Date().getFullYear());
calculateAge(1994, new Date().getFullYear());
calculateAge(2001, new Date().getFullYear());
