function typeOf(value){
    console.log("The type of the value is:");
    console.log(typeof value);
    return typeof value;
}
typeOf("Boris");

typeOf(34);

typeOf(true);

typeOf(null);

typeOf();

const theType = typeOf("Boris");
console.log("theType: ", theType);