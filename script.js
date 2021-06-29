'use strict'

// top i have my 'global' variables
let time = new Date().getHours(); //18

// bottom i have my functions/logic in abc order

function getamOrpm(time) {
    if (time > 12) {
        time = time - 12 + 'pm';
    } else {
        time = time + 'am';
    }
    return time;
}

function getGreeting(timeOfDay, name, ampm){
    let greeting = '';
    // timeOfDay = good morning/ evening
    // name is going to be user input
    // time is am/pm
    if (name === 'amanda') {
        greeting = timeOfDay + ' ' + name + '. I hope you have a good day. The hour time is ' + ampm;
    } else {
        greeting = timeOfDay + ' ' + 'you cannot pass go, you cannot collect $200. The hour time is ' + ampm;
    }

    return greeting;
}

function getName() {
    // Make some logic that will populate that bit of text on my webpage
    let name = prompt('What is your name?'); // amanda
    return name;
}

// we are getting the date and hour of the current time

function getTimeOfDay(time) {
    let timeOfDay = '';

    // these statements are read from top to bottom
    // going to pick the FIRST true statement
    // you can have as many else if()'s as you want. there is no limit
    if (time < 12) {
        timeOfDay = 'good morning';
    } else if (time < 17) {
        timeOfDay = 'good afternoon';
    }
    // final else is a "catch all"
    else {
        timeOfDay = 'good evening';
    }

    return timeOfDay;

}

function writeToDocument(message){
    document.write(message);
}

// call all of our required functions
let timeOfDay = getTimeOfDay(time);
let name = getName();
let ampm = getamOrpm(time)
let greeting = getGreeting(timeOfDay, name, ampm);
writeToDocument(greeting);
