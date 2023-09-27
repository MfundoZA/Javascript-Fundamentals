'use strict'

/* Problem
    Write a JavaScript program to display the current day and time in the following format.  
    Sample Output : Today is : Tuesday.
    Current time is : 10 PM : 30 : 38
*/

// Variable declarations
const weekday = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

let today = new Date();
let dayOfTheWeek = weekday[today.getDay()];
let time = `${today.getHours()}  ${partOfDay(today)} : ${today.getMinutes()} : ${today.getSeconds()}`;


// Solution
console.log(`Today is : ${dayOfTheWeek}`);
console.log(`Current time is : ${time}`);


// Functions
/*
    This functions accepts a Date and
    uses the time within to retun AM
    or PM
*/
function partOfDay(date) {

    if (date.getHours() <= 11) {

        return 'AM';

    } else {

        return 'PM';

    }

}