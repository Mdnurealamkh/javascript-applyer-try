// const year = 3000;
// let reminder = year % 4;
// console.log(reminder == 0);
// console.log(reminder = 0); 

// const thisYear = 3000;
// let thiss = thisYear % 4; 
// if(thiss == 0){
//     console.log(`This Year is LeapYear`);
// }
// else{
//     console.log(`This Year Is Not LeapYear`);
// }

//   leapYear

function chackLeapYear(year){
    if ((0 == year % 100) && (0 == year % 4)) {
    console.log(year + ` is a leapYear`);
    }
    else{
    console.log(year + ` is not a leapYear`);
    }
}
const chackYear = chackLeapYear(1700);

// // exampal
// // program to check leap year
// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }

// // take input
// const year = 2000;

// checkLeapYear(year);