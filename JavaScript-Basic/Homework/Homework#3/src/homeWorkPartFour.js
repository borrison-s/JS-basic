function atm(withdrawal){
    let balance = 35000;
    console.log("Account balance:", balance);
    console.log("Withdrawal amount:", withdrawal);

    let moneyLeft = balance - withdrawal;

    if (withdrawal > balance){
        console.log("Not enought money");
        alert("Not enought money");
        return "Not enought money";
    } else if (withdrawal <= balance){
        console.log(`Your withdraw amount of ${withdrawal}, was successful!`);
        alert("Your withdrawal was successful!")
        console.log(`On your balance have ${moneyLeft} left!`);
        return { withdrawal, moneyLeft };
    }
}

const amountToWidthraw = parseFloat(prompt("Amount to withdraw:"));
const result = atm(amountToWidthraw);

console.log("result: ", result)


