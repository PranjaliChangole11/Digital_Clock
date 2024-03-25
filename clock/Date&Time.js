 //Date and Time
 //Datte Object always Carry both "Date" And "Time"
 
 //Using Date method (custructor)
//  let custructor = new Date(23, 5, 2)  //0 to 11 (month)
//  console.log(custructor)

//Using timeStamp(integer number represent in "ms" from 1-1-19770)
// let currentDate = new Date(0) //0 is time in ms
//1 day = 24*60*60 = 86400000ms ........ jan 1 ch jan 2 hote ms ni change hote
// console.log(currentDate)

// To get time in 'ms' current kiti ms chaluy he sangtat
// let currentDate  = new Date().getTime()
// console.log(currentDate)

// current date sangte
// let completeDateAndTime = new Date(2024,2,21)
// console.log(completeDateAndTime)

//Get full year, month, hours, day, date, minutes, sec....
// console.log(completeDateAndTime.getFullYear())
// console.log(completeDateAndTime.getHours())

//Digital Clock
let hourHand = document.querySelector('#hour');
let minHand = document.querySelector('#minuts');
let secHand = document.querySelector('#second');
let ampmHand = document.querySelector('ampm');

let ticking = function(){
    let currentDate = new Date();
    // console.log(currentDate)
    let getHour = currentDate.getHours()
    let getMin = currentDate.getMinutes();
    let getSec = currentDate.getSeconds();

hourHand.textContent = 'rotateZ(${hh + mm / 12}deg)';
minHand.textContent = 'rotateZ(${mm}deg)';
secHand.textContent = 'rotateZ(${ss}deg)';
};
ticking();
setInterval(ticking,100);