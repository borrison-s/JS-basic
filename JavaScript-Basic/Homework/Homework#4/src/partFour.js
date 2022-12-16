console.log("==== Minimum number ====");
let numArray = [3, 14, 27, 32, 44, 59, 8, 11, 65, 78, 55, 18, 65];
function minNum(inputArray) {
    let i = 0;
    let min = Infinity;
    while (i < inputArray.length){
        console.log(`Member: ${inputArray[i]}`);
        if(inputArray[i] < min){
            min = inputArray[i];
    }
        console.log(`Minimum number is: ${min}`);
        i++;
    }
        return min;
}
const minimum = minNum(numArray);

console.log("==== Maximum number ====");
function maxNum(inputArray){
    let i = 0;
    let max = -Infinity;
    while(i < inputArray.length){
        console.log(`Member: ${inputArray[i]}`);
        if(inputArray[i] > max){
            max = inputArray[i];
        }
        console.log(`Maximum number is: ${max}`);
        i++;
    }
        return max;
}
const maximum = maxNum(numArray);

console.log("==== Sum of min and max  ====");

function sumOfMinAndMax(min, max){
    let sum = min + max
    console.log(`Sum of minimum and maximum is: ${sum}`);
    return sum;
}

const sum = sumOfMinAndMax(minimum, maximum);

//Bonus: Try making the function work if there are other types of items in it

