var avaliblePhones = 30;
console.log("Avalible phones");
console.log(avaliblePhones);

var priceForOne = prompt("Price for one phone is 119.95$, please enter the value");

var pricePerPiece = parseInt(priceForOne);
console.log("Price for one phone");
console.log(priceForOne);

var tax = prompt("Tax of 5%");

var taxValue = parseInt(tax);
console.log("Tax of 5%");
console.log(taxValue);

var taxDecimal = taxValue / 100;
console.log(taxDecimal);

var price = avaliblePhones * priceForOne;
console.log("Price for all 30 phones");
console.log(price);

var totalTax = price * taxDecimal;
console.log("Total tax for 30 phones:");
console.log(totalTax);

var totalPrice = price + totalTax;
console.log("TOTAL PRICE:");
console.log(totalPrice);











