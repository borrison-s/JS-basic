function sumArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i += 1) {
    sum += array[i];
    }
    console.log(sum);
    return sum;
  }
  myArray = [23, 11, 53, 88, 97];
  sumArray(myArray);

let numArray = [2, 3, 'Boris', 5,];
function validateNumber(myArr){
    let i = 0;
    while (i < myArr.length){
        if (typeof(myArr[i]) == "string"){
            console.log("ERROR");
        }
        i++;
    }
}


validateNumber(numArray);