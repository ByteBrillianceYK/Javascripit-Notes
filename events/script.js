//type,timestamp,defaultprevented,
//target,toElemet,sorceElement,currentTarget
//clientX,clientY
//altkey,ctrlkey,shiftkey,keyCode

// document.getElementById("books").onclick = function () {
//     alert("book clicked");
// }


// document.getElementById("books").addEventListener('click', function (e) {
//     console.log(e)
// },false)

const books=document.getElementById("books")
const ul=document.getElementById("ul")

ul.addEventListener('click', function (e) { 
    console.log("ul clicked");
}, false)

books.addEventListener('click', function (e) { 
    console.log("book clicked");
    e.stopPropagation();
},false)

document.getElementById("google").addEventListener('click', function (e) { 
    e.preventDefault()
    // e.stopPropagation()
})