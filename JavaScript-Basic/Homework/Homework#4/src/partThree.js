myArr = ["This", "is", "part", "three", "of", "homework", "4!"];

function bigString(inputArray){
    let sentence = inputArray.join(" ");
    console.log(sentence);
    return sentence;
}
bigString(myArr);