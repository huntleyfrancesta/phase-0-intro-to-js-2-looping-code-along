// Code your solutions in this file
function writeCards(names, event) {
    const messageArray = []
    for (let i = 0; i < names.length; i++) {
        console.log(i)
        let greeting = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
        messageArray[i] = greeting;
    }
    return messageArray;
    debugger;
}
const num = 10;

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
    return num;
    l;
}
const avent = ["birthday"];
console.log(writeCards(names, avent))
    // const names = (["Ada", "Brendan", "Ali"], 'surprise');
    // const countDown = (10; > = 0)
    // const avent = "birthday";
    // const messageArray = []
    // for (let i = 0; i < names.length; i++) {
    // let greeting = 'Thank you, ${names[i]}, for the wonderful ${avent} gift!`;
    // messagesArray[i] = greeting;
    // }
    // console.log(messagesArray);