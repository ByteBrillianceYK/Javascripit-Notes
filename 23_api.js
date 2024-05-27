// fetch("https://api.github.com/users/yadnyshkhotre")
//     .then(() => { console.log("Fetching github repositories") })
//     .then(() => { console.log("fetiching faild")})

// // console.log(myApi)

// // console.log(myApi)

// const myPromise = new Promise((resolve, reject) => {
//     let myName = "yadnyesh"
//     if (myName == "dsfgsdf") {
//         resolve("success")
//     } else {
//         reject("fail")
//     }
// })

// myPromise.then((msg) => {
//     console.log("your operation ",msg)
// }).catch((err) => {
//     console.log("your operation ",err)
// })

// fetch("https://api.github.com/users/yadnyeshkhotre").then(() => {
//     console.log("fetched successfully")
// }).catch(() => {
//     console.log("fetching faild")
// }).finally(() => {
//     console.log("this task is completed")
// })





//1 sync and async
// console.log("one")
// console.log("two")
// setTimeout(() => {console.log("three") },3000)
// console.log("four")
// console.log("five")





//callback 1
// const h1 = document.querySelector("h1")

// const myNameFunc= () => {
//     console.log("My name is yadnyesh")
// }
// h1.addEventListener('click',myNameFunc)


//callback 2
// function food(dish) {
//     console.log(`Today i eat this ${dish} in my food`)
// }

// function dinner(dish, food) {
//     food(dish)
// }
// dinner("bhindi",food)





//callback hell
//nested

// const myMarks = 40

// if (myMarks >= 43) {

//     if (myMarks >= 80) {
       
//         if (myMarks>=90) {
//             console.log("waah bete sabas")
//         } else {
//             console.log("good but can do better")
//         }
//     }
//     else {
//         console.log("scope of improvement")
//     }
// }

// else {
//     console.log("fail")
// }


//example of gettingData
// function dataCenter(dataId,dataCenter) {
//     setTimeout(() => {
//         console.log(`your data is ${dataId}`)
//         if (dataCenter) {
//             dataCenter()
//          }
//     }, 2000)
// }
// dataCenter(1)
// dataCenter(2)
// dataCenter(3)

//what i want to do is that i want every data to be printed after every 2 seconds
// dataCenter(1, () => {
//     dataCenter(2, () => {
//         dataCenter(3)
//     })
// })



//promises

// function food(dish) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dish == "bhindi") {
//                 reject("dont like")
//                 console.log("promise done but ...rejected")
                
//             } else {
//                 console.log("promise done")
//             resolve(`I love ${dish} mumma`)
//         }
//          },3000)
        
//     })
// }



// let promise = new Promise((resolve, reject) => {
//     let myAge = 17
//     if (myAge >= 18) {
//         resolve("i can vote")
//     }
//     else {
//         reject("I can't vote")
//     }
// })


// function food(dish) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { console.log("mummy, main aa gaya kya khana ready hain?")},2000)
        
//         setTimeout(() => { console.log("haan beta, tu haat mu dho le main khana lagati hu")},4000)
        
//         setTimeout(() => {

//             if (dish != "bhindi") {
//                 resolve(`${dish} accepted`)
//             } else {
//                 reject('${dish} rejected')
//             }

//          },10000)
//     })
//         .then((res) => {
//         console.log(res)
//     }).catch((err) => {
//         console.log(err)
//     })
// }




// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("item delivered")
//             resolve("resolved")
//         },5000)
//      })
// }
// console.log("fetching delivery updates...")
// let deliveryUpdate = asyncFunc()

// deliveryUpdate.then((res) => {
//     console.log(res)
//  })



//solving callback problem with promises

// let dataCenter1 = function () {
//     return new Promise((resolve, reject) => {
//         console.log("data 1 fetching...")
//         setTimeout(() => {
            
//             resolve("data 1 received")
            
//         },2000)
//     })
// }


// let dataCenter2 = function () {
//     return new Promise((resolve, reject) => {
//         console.log("data 2 fetching...")
//         setTimeout(() => {
            
//             resolve("data 2 received")
            
//         },2000)
//     })
// }

// dataCenter1().then((res) => {
//     console.log(res)
//     dataCenter2().then((res) => {
//         console.log(res)
//     })
// })



// dataCenter2().then((res) => {
//     console.log(res)
// }).catch((err) => { console.log(err) })



// function dataCenter(id) {
//     return new Promise((resolve, reject) => {
//         console.log("fetching  data...")
//         setTimeout(() => {
//             if (id) {
//                 resolve(`data fetched is ${id}`)
                
//             } else {
//                 reject("data fetching failed")
//             }
            
            
//         },3000)
//     })
// }

// dataCenter(123).then((res) => {
//     console.log(res)
//     dataCenter(456).then((res) => {
//         console.log(res)
//         dataCenter(789).then((res) => { console.log(res) })
//     }).catch((err) => { console.log(err); })
// }).catch((err) => { console.log(err); })

// function api(name) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(200)
//             console.log(`hello ${name}`)
//          },3000)
        
//     })
// }


// (async function () {
//     console.log("getting one ....")
//     await api("yadnyesh")
//     console.log("getting two ....")
//     await api("gayatri")

// })()




// (function normalFun(name) {
//     console.log(name)
// })("yadnyesh")

// const url = "https://api.github.com/users/yadnyeshkhotre"

// const func = async () => {
//     console.log('fetching ...')
//     await fetch(url)

   
// }


// const url = "https://api.github.com/users/yadnyeshkhotre";


// (async function getData() {
//     console.log("getting data...")
//     let data = await fetch(url)
//     console.log( data)

// })()


// function controlData(id) {
//     console.log("fetcing data...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id === "KJJPK10")
//             {
//                 resolve(`data is ${id}`)
//             } else {
//                 reject(`data ${id} is not available`)
//             }
//     }, 2000)
//     })
    
// }

// controlData('KJJPK10').then((data) => {
//     console.log(data)
//     controlData("jalsjsd").then((data) => {
//         console.log(data)
//     }).catch((err) => {
//         console.log(err)
//         throw new Error(err)
//     })
// })

// const apiUrl = "https://api.github.com/sers/yadnyeshkhotre"


// const promise = fetch(apiUrl)

// async function fetchingApi() {
//     await promise
// }


// fetchingApi()





// function controlData(id) {
//     console.log("fetcing data...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id === "KJJPK10")
//             {
//                 resolve(`data is ${id}`)
//             } else {
//                 reject(`data ${id} is not available`)
//             }
//     }, 1000)
//     }).then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err)
//         throw new Error(err)
//     })
// }


const url = "https://cat-fact.herokuapp.com/facts";

// const promise = fetch(url)

// console.log(promise)


// (async function fetchData() {
//     const promise = await fetch(url)
//     const jsObj =await promise.json()
//     console.log(jsObj)
// })()



// const h1 = document.querySelector("h1");
// const button = document.querySelector("button")



// button.addEventListener('click', () => {
//     fetch(url).then((res)=>{
//     return res.json()
//     }).then((data) => {
//     const fact = data[parseInt(Math.random()*5)].text
//     h1.innerHTML=fact
    
// })
// })


// async function fetchData() {
//     const promise = await fetch(url, {
//     method: 'POST',
//     headers: {
//         'Content-Type':
//             'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(user)
// }
//     })
//     const fact =await promise.json()
//     h1.innerHTML=fact[parseInt(Math.random()*5)].text
// }

// button.addEventListener('click',fetchData)

