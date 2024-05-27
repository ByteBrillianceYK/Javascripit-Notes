// In JavaScript, objects are king. If you understand objects, you understand JavaScript.

// 1]Accessing JavaScript object Properties
// const myDreamHouse = {
//   location: "village(Dewareda)",
//   "design": "farmhouse tranditional",
//   "budget": "20 lakhs",
//   "is In The Construction Proces": false,
//   specialitiesOfTheHouse: function () {
//     return (`As this is my dream house, I am gonna customize it to the next level. This house will be located at ${this.location} and its design will be ${this.design} `)
//   }
// }

// console.log(myDreamHouse. )
// console.log(myDreamHouse["is In The Construction Proces"])
// const x = "specialitiesOfTheHouse"
// console.log(myDreamHouse[x]())





















// 2] JavaScript object for...in Loop

// const myDreamHouse = {
//   location: "village(Dewareda)",
//   "design": "farmhouse tranditional",
//   "budget": "20 lakhs",
//   "is In The Construction Proces": false,
//   specialitiesOfTheHouse: function () {
//     return (`As this is my dream house, I am gonna customize it to the next level. This house will be located at ${this.location} and its design will be ${this.design} `)
//   }
// }


// for (let x in myDreamHouse) {
//   console.log(myDreamHouse[x])
// }















//3]  Adding New Properties

// const myDreamHouse = {
//   location: "village(Dewareda)",
//   "design": "farmhouse tranditional",
//   "budget": "20 lakhs",
//   "is In The Construction Proces": false,
//   specialitiesOfTheHouse: function () {
//     return (`As this is my dream house, I am gonna customize it to the next level. This house will be located at ${this.location} and its design will be ${this.design} `)
//   }
// }

// myDreamHouse.interior = "chandan-wood"
// console.log(myDreamHouse);












//4] Deleting Properties

// const myDreamHouse = {
//   location: "village(Dewareda)",
//   "design": "farmhouse tranditional",
//   "budget": "20 lakhs",
//   "is In The Construction Proces": false,
//   specialitiesOfTheHouse: function () {
//     return (`As this is my dream house, I am gonna customize it to the next level. This house will be located at ${this.location} and its design will be ${this.design} `)
//   }
// }

// // delete myDreamHouse["is In The Construction Proces"]
// delete myDreamHouse.location
// console.log(myDreamHouse);






//5] Nested Objects


// const myObj = {
//   name: "yadnyesh",
//   rollNO: 36,
//   class: 3,
//   myCarCollection: {
//     car1: "XUV700",
//     car2: "Thar",
//     car3: "Rolls-Royals",
//     myFavCars: {
//       car1: "dodge challanger",
//       car2: "Elentra",
//       car3: "Lamborgini",
//       favCarColors: ["black", "yellow", "purple"],
//       mostFavCarEver: {
//         car1:"formula 1"
//       }
//     }
//   }
// }
// // console.log(myObj.myCarCollection.myFavCars.favCarColors[1])
// console.log(myObj["myCarCollection"]["myFavCars"]["favCarColors"][0]);



















//6] Object inside an array
// const arr = [
//   {
//     name: "yadnyesh",
//     rollNO: 43,
//     class:1
//   },
//   {
//     name: "suyash",
//     rollNO: 22,
//     class:2
//   },
//   {
//     name: "vaibhav",
//     rollNO: 13,
//     class:3
//   },
// ]
// console.log(arr[2])


// const newArr=[1,2,3,4,5]






//7]Object.assign()

// const obj1 = {
//   name: "pranav",
//   rollNo: 33,
//   class:2
// }

// const obj2 = {
//   name1: "vihas",
//   rollNo1: 21,
//   class1:2
// }


//spread operator
// const obj3 = { ...obj1, ...obj2 }

// console.log(obj3);




//8]Object.keys()

const myDreamHouse = {
  "location": "village(Dewareda)",
  "design": "farmhouse tranditional",
  "budget": "20 lakhs",
  "is In The Construction Proces": false,
  specialitiesOfTheHouse: function () {
    return (`As this is my dream house, I am gonna customize it to the next level. This house will be located at ${this.location} and its design will be ${this.design} `)
  }
}




//10]Object.entries()
// console.log(Object.entries(myDreamHouse));




// 11]obj.hasOwnProperty
console.log(myDreamHouse.hasOwnProperty("budfssaget"))

