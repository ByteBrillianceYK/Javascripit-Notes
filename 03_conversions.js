// Converion to Numbers()

let marks = Number("16")
// console.log(typeof marks);  //number

let marks1 = Number("yadnyesh")  //convert successfully
// console.log(typeof marks1); //number
// console.log(marks1); //NaN

let marks3 = Number("1234abc")
// console.log(marks3)  //NaN

let marks4 = parseInt("123.45")
// console.log(marks4)
// console.log(typeof marks4); 

let marks5 = parseFloat("123.45abc")
// console.log(marks5)


let marks6 = Number(null)
// console.log(marks6)  //0

let marks7 = Number(undefined)
// console.log(marks7) // NaN

let marks8 = Number(false)
// console.log(marks8) // 0



//Boolean() conversion
let bool=Boolean("nb3456345645")
// console.log(bool) //true
// console.log(typeof bool) //boolean

let bool2 = Boolean("")
// console.log(bool2) //false

let bool3 = Boolean(0)
// console.log(bool3) //false


//String() conversion
let str=String(55)
// console.log(str) //55
// console.log(typeof str) // string


// //tricky conversion
// let isPassed=1

//Operations
let random = 5
let random2 = -random
// console.log(random2) // -5

// console.log(2 ** 3)    //8
// console.log(4 % 2)  //reminder


let str1 = "yadnyesh"
let str2 = "khotre"
// console.log(str1+str2)


// console.log("1" + 2) //12 // 3 // error
// console.log(1 + "2")  //62
// console.log("1" + 2 + 3) //123
// console.log(1 + 2 + "3") //33

// console.log("2" - 2)


//special case
// console.log(true +) //error
// console.log(+"")//error ==0

// let num1=num2=num3=5



//Increment:
// let randomNumber=10
// // console.log(randomNumber+1)   //11
// // console.log(1+randomNumber)   //11


// console.log(randomNumber++) //10
// console.log(randomNumber)   //11

// console.log(++randomNumber) //11
// console.log(randomNumber)   //11

// let anyVariable = 10
// let updatedVariable = (anyVariable++) + (++anyVariable)
// console.log(updatedVariable);   //22


// let anyVariable = 10
// let updatedVariable= (++anyVariable) + (anyVariable++)
// console.log(updatedVariable); //22
// console.log(anyVariable); //12


//decrement
// --x               x--

// let randomNumber=10
// // console.log(randomNumber--) //10
// // console.log(randomNumber)   //9

// console.log(--randomNumber) //9
// console.log(randomNumber)   //9



//userName, password, email, phoneNumber, isDesabled, status, height

let userName = "yadnyeshkhotre"
const password = 123456789
let email = "yadnyesh@gmail.com"
const phoneNumber = 99888174374
let isDesabled = false
let status = undefined
let height = null

// console.log("My userName is " + userName)
// console.log("My password is " + password)

console.log(`My username is ${userName} 
my password is ${password}
and my email is ${email}
To contact me you can use my number ${phoneNumber}
I am desabled. This statement is ${isDesabled}
my current status is ${status}
and talking about my height is ${height}, that is i dont know`)


















//create a form consit of username, password, email, phoneNumber, isDesabled, status, height and show my all the info in the terminal

// const userName = "yadnyeshkhotre"
// const password = 12345678
// let email = "smilingyadnyesh001@gmail.com"
// const phoneNumber = 8855977815
// let isDesabled = false
// let status;
// let height=null


// console.log(`My userName is ${userName},  
// My account password is ${password}
// My email is ${email}
// Also my phone number is ${phoneNumber}
// I am disabled. this statement is ${isDesabled}
// my current state is ${status}
// and lastly my hight is ${height} mane i dont know`)






