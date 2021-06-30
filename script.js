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

function getGreeting(timeOfDay, name, ampm) {
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

function writeToDocument(message) {
    document.write(message);
}

// call all of our required functions
let item1 = getTimeOfDay(time);
let name = getName();
let ampm = getamOrpm(time)
let greeting = getGreeting(item1, name, ampm);
writeToDocument(greeting);


let rating = prompt('what is your rating for this restaurant?');

for (let i = 0; i < rating; i++) {
    document.write('<img class="catStar" src="catCoffee.jpg"/>');
}

function guessCatsName() {
    let catName = prompt(' Who owns this cafe? Josie or KittyCat?');
    while (catName != 'josie') {
        catName = prompt('Try again. Who owns this cafe? Josie or KittyCat?');
    }
    writeToDocument("this function was run by GuessCatName function");

}

// function numbersGame(number1, number2){
//     let sum = number1 + number2;
//     let response = '';

//     if(sum > 10000){
//         response = 'The sum of ' + number1 + ' + ' + number2 + ' is equal too ' + sum + ' and is a more than 10000';
//     } else{
//         response = 'The sum of ' + number1 + ' + ' + number2 + ' is equal too ' + sum + ' and is a less than 10000';
//     }

//     return response;
// }

// numbersGame(50000, 800);

// // parameters allow us to build logic around variable values
// function fillUpTank(gradeOfGas, tankSize, pricePerGallon, numberOfFillsAmonth, numberOfMonthhs){

//     // probably make a function for you that tells you how much you will spend over some number of monthhs

// }

// function budget(income1, income2, income3, coreBills, extraBills){
//     let totalIncome = income1 + income2 + income3;
//     let moneyLeftOver = totalIncome - coreBills - extraBills;

//     return moneyLeftOver;
// }

// budget(10, 10,5, 7, 1);