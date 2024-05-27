// //filter, map , reduce
// //filter

// const studentArr = ["tanvi", "rahul", "suyash", "ketki"]

// // const result=studentArr.forEach((eachStd) => {
// //     if (eachStd == "tanvi") {
// //         return true
// //     }
// // })
// // console.log(result)

// const filterReturnVal = studentArr.filter((eachStd) => (
//     eachStd.length > 5
// )
    
// )

// // console.log(filterReturnVal)


// // const obj = {
// //     name: "yadnyesh",
// //     class: 3,
// //     age:20
// // }



// // obj.filter((i) => {
// //     console.log(i)
    
// // })
// // arr.filter((i) => (
// //     i
// // )
// // )

// // const arr = ["tanvi", "vishal"]

// // const arr2 = []

// // arr.forEach((eachStd) => {
// //     if (eachStd.length > 5) {
// //         arr2.push(eachStd)
// //     }
// // })

// // console.log(arr2)

// const foodMenu = [
//     {
//         dish: "pani puri",
//         price: 30,
//         taste: "spicy"
//     },
//     {
//         dish: "chay puri",
//         price: 50,
//         taste: "mitha"
//     },
    
// ]

// const totalBill=foodMenu.reduce((accumulator,eachDish) => accumulator+eachDish.price,27)

// console.log(totalBill)


// const dish=foodMenu.filter((eachDish) => (
//     eachDish.price>30 && eachDish.taste=="mitha"
// )).map((eachDish) => {
//     return eachDish.price+10
// })

// // console.log(dish);






// const array = [1, 2, 3, 4]

// const initialValue = 0;

// // const result = array.reduce((accumulator, currentValue) => {
// //     accumulator + currentValue
// // }, 0
// // )

// // console.log(result)

// const result = array.reduce((accumulator, currentValue) => {
//     console.log("accumulator", accumulator, "currentValue", currentValue)
//     return accumulator + currentValue
// }, 5)

// // console.log(result)


// const ages = [18, 19, 21, 20]

// // const result = ages.filter((eachAge) => eachAge)
// // console.log("result", result)


// const names = ["tanvi", "aryan", "vignesh"]

// const variable=names.filter(eachName);

// function eachName(eachName) {
//     return eachName.length>5
// }
// console.log(variable)

//filters:

//forEach

// const student = ["Leena", "Pranav", "Shankar", "Saurav", "Swapnil", "Vaibhav", "Vihas"]

// const newArr=student.forEach((eachStudent)=> {
//     return eachStudent
// })

// console.log(newArr)

//filter:
// const student = ["Leena", "Pranav", "Shankar", "Saurav", "Swapnil", "Vaibhav", "Vihas"]


// const result=student.filter((eachStudent) => {
//     if (eachStudent.length > 5) {
//         return eachStudent
//     }
// })

// console.log(result);
// console.log(student);

// The filter() method creates a new array filled with elements that pass a test provided by a function.

// The filter() method does not execute the function for empty elements.

// The filter() method does not change the original array.



// const menu = [
//     {
//         dish: "pani puri",
//         price: 30,
//         taste:"spicy"
//     },
//     {
//         dish: "bhel puri",
//         price: 50,
//         taste:"mitha"
//     },
//     {
//         dish: "papdi chati",
//         price: 60,
//         taste:"chatpata"
//     },
//     {
//         dish: "ragada puri",
//         price: 35,
//         taste:"medium spicy"
//     }
// ]

// const result = menu.filter((eachDish) => {
//     return eachDish.price < 50 && eachDish.taste === "spicy"
// })

// console.log(result)


//map

// const numbers = [4, 9, 16, 25]

// const result = numbers.map(function (eachNum) {
//     return eachNum+10*10
// })

// console.log(result);





// const num = 25
// const result=Math.sqrt(num)
// console.log(result)



//chaining:
// const arr = [, 21, 43, 56, 4, 23, 23, 5, 76, 4, 32]

// const result=arr.filter((eachEle) =>(
//     eachEle>30
// )).map((eachEle) => (
//     eachEle/2
// )).filter((eachEle) => (
//     eachEle>30
// ))

// console.log(result)


//reduce
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)


// const productPrices = [30000, 20, 360]

// const gstValue=30

// const totalBill=productPrices.reduce((total,currentValue) => {
//     return total + currentValue
// },gstValue)

// console.log(totalBill)

// const numbers = [300, 600, 150, 200]

// const result=numbers.reduce(funRef,30)


// function funRef(total,eachNum) {
//      console.log(eachNum+total)
// }

// const array=[300,600, 150, 200]

// array.map(function (currentValue, index, arr) {
//     console.log(currentValue, index, arr)
// })


// const menu = [
//     {
//         dish: "pani puri",
//         price: 30,
//         taste:"spicy"
//     },
//     {
//         dish: "bhel puri",
//         price: 50,
//         taste:"mitha"
//     },
//     {
//         dish: "papdi chati",
//         price: 60,
//         taste:"chatpata"
//     },
//     {
//         dish: "ragada puri",
//         price: 35,
//         taste:"medium spicy"
//     }
// ]


// const result = menu.reduce((totalBill, currentDish) => {
    
//     console.log("totalBill: ", totalBill, "currentDish price: ", currentDish.price)
//     return currentDish.price + totalBill
// },30)

// console.log(result)

















