/*
In JavaScript, almost "everything" is an object.

JavaScript object is a collection of named values

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.


There are different ways to create new objects:

Create a single object, using an object literal.  //
Create a single object, with the keyword new.     
Define an object constructor, and then create objects of the constructed type.
Create an object using Object.create().


JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.

Singleton object made with constructor
whereas whenever we make object with literals, it wont create a singleton object
*/


//1]Object literals
// const fruits = {name:"yadnyesh",rollNO:36,dept:"aiml"}



let obj1 = {
  name: "yadnyesh",
  rolNO: 36,
  dept: "aiml"
}

// console.log(obj1.hasOwnProperty("fllor"))
// // console.log(obj1.toLocaleString("name"))
// const str=obj1.toString
// 

const person = {
  fname:"John",
  lname:"Doe",
  age: 25
};

// for (let x in person) {
//   console.log(person[x]);
// }


// console.log(`My name is ${person.fname} and my surname is ${person.lname}. my age is ${person.age}`);