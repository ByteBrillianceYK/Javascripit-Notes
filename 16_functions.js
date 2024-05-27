// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).


// function washingMachine() {
//     console.log(`Hey there! your washu has started! i received your ${cloth} cloth and i am washing it! `);
// }

// washingMachine(4,4,5,6,7)



//a want to define a function to multipy two numbers:

// function addition(num1,num2,...allNum) {
//     console.log(allNum);
// }


// addition(10, 20,10, 10,10,10,10,101,101,10)


//a want to pass an array inside my function:

// const students = ["tanvi", "shankar", "abhishek"];

// function studentFunction(studentsArr) {
    
//     for (let i in studentsArr) {

//         console.log(studentsArr[sportsTeacher] == "shankar");

//     }
// }

// studentFunction(students)


//passing objects inside a function:
const obj = {
    myName: "Yadnyesh",
    rollNo: 10,
    class:3
}

function passObj(object) { 

    // const name = object.myName

    // const rollNumber = object.rollNo

    const { myName:name,rollNo: rollNumber }=object
    
    return `Helo! My name is ${name}. and my roll no is ${rollNumber}`
}


const str = passObj(obj)
console.log(str);