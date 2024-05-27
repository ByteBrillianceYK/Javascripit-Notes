// JavaScript Date Objects

// 1]
// const dtodaysDateate=new Date("11-10-2023 ");

// console.log(typeof todaysDate)      // Date Object













// 3] new Date(year,month)
// let d = new Date(2023, 0,23)      //0==>january 1=>feb
// console.log(d.toString());




// // 8] new Date(year,month,day,hours,minutes,seconds,ms)
// let myDate = new Date(2023, 10, 10, 6, 37, 30, 22)
// console.log(myDate.toString());
















/*
Creating Date Objects

Date objects are created with the new Date() constructor.

There are 9 ways to create a new date object:
    
    1] new Date()
    2] new Date(date string)
    
    3] new Date(year,month)
    4] new Date(year,month,day)
    5] new Date(year,month,day,hours)
    6] new Date(year,month,day,hours,minutes)
    7] new Date(year,month,day,hours,minutes,seconds)
    8] new Date(year,month,day,hours,minutes,seconds,ms)

    9] new Date(milliseconds)


*/
// 1]
// const d = new Date("October 13, 2014 11:13:00");
// console.log(d.toLocaleString());






/*

3] new Date(year, month, ...)
new Date(year, month, ...) creates a date object with a specified date and time.

7 numbers specify year, month, day, hour, minute, second, and millisecond (in that order):

*/






















//Date Methods
// When a date object is created, a number of methods allow you to operate on it.
// 1]toString();
// 2]toDateString();
// 3]toUTCString();
// 4]toISOString();

// let nowDate = new Date();
// console.log(nowDate.to())















/*

//get methods:

Method          	Description

getFullYear()	    Get year as a four digit number (yyyy)
getMonth()	        Get month as a number (0-11)
getDate()	        Get day as a number (1-31)
getDay()	        Get weekday as a number (0-6)
getHours()	        Get hour (0-23)
getMinutes()        Get minute (0-59)
getSeconds()	    Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	        Get time (milliseconds since January 1, 1970)

*/

// let date = new Date()
// console.log(date.getMinutes()) //2023


//set Methods
// const d = new Date();
// d.setTime(4738826383);
// console.log(d.getTime());

// const curretTime = Date.now();
// console.log(curretTime);


