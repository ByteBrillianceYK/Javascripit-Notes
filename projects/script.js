// console.log("hello thre")
// const child1=document.querySelector("#child1")
// const child2 = document.querySelector('#child2')
// const child3 = document.querySelector('#child3')

// // console.log(child2)
// const parent = document.querySelector('#parent')
// console.log(parent.children)

// parent.onclick = function () {
//     console.log("parent clicked")
// }
// const address=document.querySelector('#address')


// parent.addEventListener('click', function (e) {
//     console.log("parent event occured")
// })

// child2.addEventListener('click', function (e) {
//     console.log("child2 clicked")
// })

//
// parent.addEventListener("click", (e) => {
//     e.preventDefault()
//     let removeIt = e.target.parentNode
//     // removeIt.remove()
//     console.log(e.target.tagName)
//     if (e.target.tagName === "IMG") {
//         removeIt.parentNode.removeChild(removeIt)
//     }
    
// })

// child2.onclick = function () {
//     console.log("first click")
// }

// child2.onclick = function () {
//     console.log("second click")
// }

// parent.addEventListener('click', function (e) {
//    console.log("parent click")
// }, false)
 

// child1.addEventListener('click', function (e) {


// }, false)

// child1.removeEventListener('click', ()=>{
//     child1.remove()
// })

// child2.addEventListener('click', function (e) {
//     console.log("child2 click")
// },true)

// child3.addEventListener('click', function (e) {
//     console.log("child3 click")
// },true)

// child1.addEventListener("click", function () {
//   console.log("Hi")
// })
// child1.removeEventListener("click", function() {
//   console.log("Hi")
// })

// function sayHi() {
//   console.log("Hi")
// }

// const handler1 = function (e) {
//     console.log("handler one clicked")
// }
// child1.addEventListener("click", handler1)
// child2.addEventListener('click', handler1)

// child2.removeEventListener('click', handler1)
// let currColor='white'
// child1.addEventListener("click", function (e) {
//     if (currColor == 'white') {
//         console.log('child1 clicked')
//         document.body.style.backgroundColor = "black"
//         currColor ='black'
//     } else {
//         document.body.style.backgroundColor = "white"
//         currColor ='white'
//     }
    
//  })



// parent.ondblclick = function (event) {
//     event.preventDefault();
//     let target = event.target.parentNode
//     console.log(target)
//     target.remove()
// }

// parent.addEventListener('click', () => { }, )
// console.log()

// child3.children[0].onclick = function () {
//     alert("child3 clicked from scriptfile")
// }



// child3.children[0].onclick = function () {
//     alert("child3 clicked from scriptfile ones again")
// }


// child3.addEventListener('click', () => {
//     console.log("child3 clicked")
// }, false)

// child3.addEventListener('click', () => {
//     console.log("child3 clicked ones again")
// }, false)

// const callBackFun=() => {
//     console.log("child1 clicked")
// }

// parent.addEventListener('click', () => {
//     console.log("parent clicked")
// }, false)

// child1.addEventListener('click',callBackFun,  false)

// child1.removeEventListener('click', callBackFun, false)


// child2.addEventListener('click', () => {
//     console.log("child2 clicked")
//  }, false)

//  child3.addEventListener('click', () => {
//     console.log("child3 clicked")
//  }, false)


// const button = document.querySelector('button')
// let currentBgColor='white'

// button.addEventListener('click', () => {
//     if (currentBgColor == 'white') {
//         document.body.style.backgroundColor = 'black'
//         currentBgColor = 'black'
//         console.log(currentBgColor)
        
//     } else {
//         document.body.style.backgroundColor='white'
//         currentBgColor = 'white'
//         console.log(currentBgColor)
//     }
// }, false)






// greetings("yadnyesh")

// function greetings(name){
//     console.log(`Good Evening ${name}`)
// }


// const myName="yadnyesh"

// if(myName===window.myName){
//     console.log("this is a true statement")
// }



// window.console.log(myName)
// const sayYadnyesh=(() => console.log("yadneysh"))
// setInterval(sayYadnyesh,5000)
// const h1 = document.querySelector("h1")
// const changeName = function () {
//     h1.innerHTML = "My name is Rahul"
    
// }

// const changeName1 = function () {
//     h1.innerHTML = "My name is Yadnyesh"
    
// }


// setInterval(changeName, 3000)
// const yadnyesh=setInterval(changeName1, 5000)

// document.querySelector("button").addEventListener('click', () => {
//     clearInterval(yadnyesh)
//     console.log("stop")
// })

// const start = document.getElementById("start")
// const stop = document.getElementById("stop")

// const startFunction = () => {
//     console.log("start")
// }
// let ref;
// start.addEventListener('click', () => {
//      ref=setInterval(startFunction, 1000)
// })

// stop.addEventListener('click', () => {
//     clearInterval(ref, 1000)
//     console.log("stop")
// })



// const randomColor = function () {
//     const hex = '0123456789ABCDEF';
//     let color = '#';


//     for (let i = 0; i < 6; i++){
//         color=color+hex[Math.floor(Math.random() * 16)]
//     }


//     document.body.style.backgroundColor=color
//     // console.log(color)


// }

// // randomColor()

// const start = document.getElementById("start")
// const end = document.getElementById("stop")
// let ref;
// start.addEventListener('click', () => {
//      ref=setInterval(randomColor,1000)
// })

// end.addEventListener('click', () => {
//     clearInterval(ref, 1000)
// })










// window.console.log("yadnyesh")



// sayHello()

// function sayHello() {
//     console.log("hellooooo")
// }


// const myName = () => console.log("yadnyesh")

// const button=document.getElementById("btn")
// const removeBtn = document.getElementById("removeBtn")

// let ref;

// button.addEventListener('click', function () {
//     ref=setTimeout(myName,2000)
// })

// removeBtn.addEventListener('click', function () {
//     clearTimeout(ref)
// })

// const myName=() => {
//     console.log("yadnyesh")
// }
// setInterval(myName,2000)


// const h1 = document.querySelector("h1")

// setInterval(() => {
//     h1.innerHTML = "abhishek"
// },1000)


// const ref=setInterval(() => {
//     h1.innerHTML = "yadnyesh"
// },2000)


// const button = document.getElementById("btn")

// button.addEventListener('click', () => {
//     clearInterval(ref)
//  })





const start = document.getElementById("start")
const stop = document.getElementById("stop")
let reference;

start.addEventListener('click', () => {
    reference=setInterval(() => { 
        const canvas='0123456789abcdef'
        let color = "#"
        for (let i = 0; i < 6; i++){
        const random=Math.floor(Math.random() * 16)
        color = color + canvas[random]
        
        }
        document.body.style.backgroundColor = color
    },1000)
    
})


stop.addEventListener('click', () => { 
    clearInterval(reference)
    console.log("stop button clicked")
})









// const random = (Math.random()*16)
// console.log(random)
// console.log(Math.floor(random))
