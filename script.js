'use strict'

// Make some logic that will populate that bit of text on my webpage

let answer = prompt('What is your name?'); // amanda

// we are getting the date and hour of the current time
let time = new Date().getHours(); //15
let timeOfDay = '';


// these statements are read from top to bottom
// going to pick the FIRST true statement
// you can have as many else if()'s as you want. there is no limit
if(time < 12){
    timeOfDay = 'good morning';
} else if(time < 17){
    timeOfDay = 'good afternoon';
} 
// final else is a "catch all"
else{
    timeOfDay = 'good evening';
}

if(time > 12){
    time = time - 12 + 'pm';
} else {
    time = time + 'am';
}


// this variable exists, but i'm not assigning a value yet
let greeting = '';

if(answer === 'amanda'){
    greeting = timeOfDay  + ' ' + answer + '. I hope you have a good day. The hour time is ' + time;
} else{
    greeting = timeOfDay  + ' ' + 'you cannot pass go, you cannot collect $200. The hour time is ' + time;
}

document.write(greeting);