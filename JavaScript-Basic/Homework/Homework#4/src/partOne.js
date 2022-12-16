myArr = ['Boris', 'sleepy', 'inactive'];

function tellStory(myArray){
    let story = `Hello, my name is ${myArray[0]}. I\`ve been ${myArray[1]} all day and i\`ve been totaly ${myArray[2]} all day long.`
    return story;
}

const fullStory = tellStory(myArr);
console.log(fullStory);
alert(fullStory);