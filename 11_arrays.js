// JavaScript Arrays

//primitive arrays literal
// const friends1 = ["suyash", "vaibhav", "yadnesh", 12, true, {}, function () { }]
// // console.log(typeof friends1)


// //object: constructor
// const friends=new Array()
// // console.log(typeof friends)


// const newArr = [20]
// console.log(newArr)


const newArr2 = new Array(20) //[ <20 empty items> ]
console.log(newArr2)

























/*
Why Use Arrays?
If you have a list of items (a list of car names, for example), storing the cars in single variables
could look like this:

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

However, what if you want to loop through the cars and find a specific one ? And what if you had not 3 cars,
but 300 ?

The solution is an array!
*/










// Creating an Array
//1] Using an array literal









//2] Using new keyword






//Accessing and Changing  Array Elements
const students = ["Ram", "Deep", "Suyash", "Mayuri","Aishwarya"]
// // console.log(students[0])
// // console.log(students[students.length-1])


students[0]="vaibhav"
// console.log(students)






// Converting an Array to a String toString()

// const students = ["Ram", "Deep", "Suyash", "Mayuri", "Aishwarya"]
// const studentsString = students.toString()
// console.log(typeof studentsString)







// Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:
// cars.length
// cars.sort()




// Looping Array Elements
// One way to loop through an array, is using a for loop:








// const points = new Array(40,20,30);
// console.log(points.length)

// const ponits2 = [40]
// console.log(ponits2)










//shallow copies vs deep copies
//arrays always create shallow copies


// let consistentStudents = ["Deep", "Suyash", "Mayuri", "Aishwarya"]
    
// let anotherArr = consistentStudents

// anotherArr[0] = "Sahil"

// console.log(consistentStudents)