// console.log("welcome to promises")

//sync example

// setTimeout(() => {
//     console.log(1)
//  },)
// console.log(2)
// console.log(3)
// console.log(4)

// const marks = 82

// if (marks >= 43) {
//     console.log("ji app pass ho gaye ho!")
//     if (marks >= 80) {
//         console.log("accha hain par app aur accha kar sakte the/ho")
//         if (marks >= 90) {
//             console.log("sabas beta")
//         } else {
//             console.log("A grade")
//         }
//     } else {
//         console.log("scope of improvement")
//     }
// }
// else {
//     console.log("koi na fail to fail firse try kro")
// }


// const h1 = document.querySelector("h1")
// const myNameFunc=() => {
//     console.log("yadnyesh")
// }
// h1.addEventListener("click", myNameFunc)

// console.log(h1.innerHTML)

// function food(dish) {
//     h1.innerHTML=`today i eat ${dish} and it was dilicious`
// }

// function dinner(dish, food) {
//     food(dish)
// }
// dinner("Panner kofta",food)


// function dataCenter(id,dc) {
//     console.log("fetching data ...")
//     setTimeout(() => {
//         console.log("data is", id)
//         if (dc) {
//             dc(id)
//         }
        
//     },3000)
// }

// dataCenter(1, () => {
//     console.log("fetching data 2...")
//     dataCenter(2, () => {
//         console.log("fetching data 3...")
//         dataCenter(3, () => {
//             console.log("fetching data 4...")
//             dataCenter(4)
//         })
//     })
// })



// const api=fetch("https://api.github.com/users/yadnyeshkhotre")
// console.log(api)

//promises
// new Promise((resolve, reject) => {
//     resolve(123)
// })


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("promise being resoved")
//         resolve("success")
//     },3000)
// })




// function food(dish) {
//     console.log("mumma khane me kya hain?")
//     setTimeout(() => { console.log("tu haat mu dho le main khana lagati hu!") }, 2000)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (dish == "panner kofta") {
//                 // console.log("promise being resoved")
//                 resolve(`i want to eat the  ${dish}`)
//             } else {
//                 reject("nai khana tumhari bhindi")
//             }
//         },8000)
//     }).then((res) => {
//         console.log("main khana kha lunga agar bhini na ho to")
//     }).catch((rej) => {
//         console.log("agar bhindi hain to main nai khane wala")
//      })
// }

// food("panner kofta")




// const dataCenter1 = function(id) {
//     console.log("data is fetching...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(id)
//         }, 3000)
//     })
// }


// const dataCenter2 = function(id) {
//     console.log("data is fetching...")
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(id)
//         }, 3000)
//     })
// }




// dataCenter1(1).then((res) => {
//     console.log(`data fetched is ${res}`)
// }).catch((err) => { console.log("your req is rejected")})



function dataCenter(id) {
    return new Promise((resolve, reject) => {
        console.log("data is fetching...")
        setTimeout(() => {
            if (id >= 200 && id <= 300) {
                resolve(`data fetced is ${id}`)
            } else {
                reject(`Your req for the id ${id} is invalid`)
            }
        },4000)
    })
}

dataCenter(209).then((response) => {
    console.log(response)

    dataCenter(249).then((response) => {
        console.log(response)

        dataCenter(270).then((response) => { console.log(response)})

    }).catch((err) => { console.log(err) })

}).catch((err) => {
    console.log(err)

})

// dataCenter(2)
// dataCenter(3)

// async function greetings(name) {
//     console.log(`good evening ${name}`)
// }

// function api(stockName) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (stockName==="tata steel") {
//                 console.log(`stock price of ${stockName} is 425`)
//                 resolve(200)
//             } else {
//                 console.log(`stock price of ${stockName} is not avalible`)
//                 reject(404)
//             }
//         },3000)
//     })
// }

// async function fetchStockPrice() {
//     console.log("fetching stock price..")
//     await api("adani airlines")
//     console.log("successfully fetched stock price")
// }


// function dataCenter(id) {
//     return new Promise((resolve, reject) => {
//         console.log("fetching data...")
//         setTimeout(() => {
//             if (id >= 200 && id <= 300) {
//                 console.log(`data fetced is ${id}`)
//                 resolve(`data fetced is ${id}`)
//             } else {
//                 reject(`Your req for the id ${id} is invalid`)
//             }
            
//         },2000)
//     })
// };

// async function dataHandler() {
//     await dataCenter(212)
//     await dataCenter(234)
//     await dataCenter(250)
//     console.log("fetched all data")
// }






































//async-await

// async function greetings(name) {
//     console.log("Good Evening",name)
// }





// function api(price) {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{console.log(`stock price ${price}`)
//         resolve(201)},2000)
//     })
// }

// (async function fetchStockPrice() {
//     console.log("fetching stock price..");
//     await api(200)
//     console.log("fetching stock price..");
//     await api(300)
//     console.log("fetching done");
// })();



// function dataCenter(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id > 200&& id < 300) {
//                 console.log(`your data is ${id}`)
//                 resolve(201)
//             } else {
//                 console.log(`could not find the requested data i.e ${id}`)
//                 reject(404)
//             }
            
//         }, 2000)
//     })
// }


// (async function dataHandler()
// {
//     await dataCenter(201)
//     await dataCenter(202)
//     try { await dataCenter(666) } catch(error) { console.log(error)}
//     await dataCenter(299)
// })()




//api:

// const promise=fetch("https://api.github.com/users/yadnyeshkhotre")
const url = "https://cat-fact.herokuapp.com/facts";

// const fetchData = (async() => {
//     console.log("Fetching data...")
//     let response = await fetch(url);
//     console.log(response)
// })()

// let h1 = document.querySelector("h1");

// (async function fetchData() {
//     console.log("Fetching data...")
//     let data = await fetch(url)
//     console.log(data)
//     data = await data.json();
//     h1.innerHTML= data[0].text
// }
// )()





// fetch(url).then((res) => {
//     return res.json()
// }).then((data) => { console.log(data) })
//     .catch((err) => { console.log(err) })






console.log("Fetching data...");
h1=document.querySelector("h1");
btn = document.querySelector("button")

// const promise = fetch(url)
// console.log(promise)
// console.log("yadnyesh khotre")

// async function getData() {
//     const promise = await fetch(url)
//     const jsObjPromise = await promise.json()
//     h1.innerHTML=jsObjPromise[parseInt(Math.random()*5)].text
//     // console.log([parseInt(Math.random()*5)])
    
// }



// btn.addEventListener('click', getData)

// console.log(Math.random())


// (function getData() {
//     setTimeout(()=>{})
//     fetch(url).then((res) => {
//         const dataInJsObj = res.json()
//         console.log(dataInJsObj)
//     })
// })()


// function fetchData() {
//     fetch(url).then((res) => {
//         return res.json();
//     }).then((jsonData) => {
//         // console.log(jsonData)
//         h1.innerHTML = jsonData[parseInt(Math.random() * 5)].text
//     })
// }
    

// btn.addEventListener('click', fetchData)

// fetch(url).then((res) => {
//     if (res.ok) {
//         console.log("succ")
        
       
//     } else {
//         console.log("err");
//          console.log(res);
//     }
// })
// const promise = fetch(url);

// // console.log(promise)
// // if (promise.ok) {
//     console.log("success")
//     console.log(promise)
// // } else {
// //     throw new Error(404)
// // }

// console.log(fetch("https://cat-fact.herokuapp.com/facts"))

// fetch("https://cat-fact.herokuapp.com/facts")
//     .then(res => res.json())
//     .then(data=>console.log(data))


