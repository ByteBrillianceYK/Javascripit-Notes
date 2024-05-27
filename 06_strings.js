// // { } curly braces
// // [ ] square brackets
// // ( ) parentheses


// const strLiteral1 = "hello";
// const strLiteral2 = "hello";

// const strObject1 = new String("hello");
// const strObject2 = new String("hello");

// console.log(strLiteral1 === strLiteral2); // true
// console.log(strObject1 === strObject2); // false (compares references, not values)

// // You can convert a String object to a primitive string for comparison:
// console.log(strObject1.valueOf() === strObject2.valueOf()); // true



//string methods


//slice()
// let fruits = "Apple, Banana, Kiwi"
// let slicedFruits=fruits.slice(7)
// // console.log(slicedFruits)

// //



// let text = "Apple, Banana, Kiwi";
// console.log(text.length)
// let part = text.slice(-12,-6);
// console.log(part)

// let str = "Apple, Banana, Kiwi";
// let part = str.substring(-12, -6);
// // let part1 = str.substring(0, 0);
// console.log(part)


// let str = "Apple, Banana, Kiwi";
// let part = str.substr(-4,4);
// console.log(part)



//replace()
// let text = "Please visit Microsoft!";
// let newText = text.replace("Microsoft", "SCOE");
// console.log(newText)


// let text = "Please visit Microsoft!";
// let newText = text.replace("MICROSOFT", "W3Schools");
// console.log(newText)

// let text = "Please Microsoft visit Microsoft!";
// let newText = text.replace(/Microsoft/g, "SCOE");
// console.log(newText)

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// const newPar=paragraph.replaceAll('dog', 'monkey')
// // Expected output: "I think Ruth's monkey is cuter than your monkey!"
// console.log(newPar)




// //trim
// let text1 = "     Hello World     ";
// let text2 = text1.trimEnd();
// console.log(text2)




//Strings
//String literals: primitive
// let str1 = "Yandyesh"
// const str2 = 'Khotre'
// console.log([typeof str1, typeof str2])             //string

// const str3 = str1 + " " + str2
// console.log(str3)
// console.log(`My name is ${str1} and surName is ${str2}`)


//String Object: string constructor
// const str = new String("ojfodjaslj3442")
// console.log(typeof str)



// { } curly braces
// ()  parenthesis
// []  squared brakets


//object:
// const object1={
//     name: "yadnysh",
//     rollNo: 36,
//     class:3
// }


//primitive string type//string literals
// let str = "36"
// let str2= 36
// // console.log(typeof str)
// console.log(str===str2)  //true



//string objects: constructor
// let str = new String("yadnyesh")
// let str2 = str
// str2 = "khotre"
// console.log(str)     //false
//rarely used



//method vs function
//method==>sets of rule||| dependent objects ||standalone not
//function==>instructions  ||| independent ||standalone



//String methods

//1] length property
// let fruits = "Apple, Banana, Kiwi"
// console.log(fruits.length)  //19



//2] 3 methods for extracting string part
//1] slice()
//2] substring()        /negative
//3] substr(start,length)



// // 1]slice(start, end)
// let fruits = "Apple, Banana, Kiwi"
// let slicedFruits = fruits.slice(-1,)
// console.log(slicedFruits
// let text = "Apple, Banana, Kiwi";
// let part1 = text.slice(-12,-6);
// console.log(part1)

//2] substring()
//slice and substring are similiar

// let fruits = "Apple, Banana, Kiwi"
// let substring = fruits.substring(0, 0)
// console.log(substring)


//3] substr(start, length)

// let fruits = "Apple, Banana, Kiwi"
// let substr = fruits.substr(-12,6)
// console.log(substr)




