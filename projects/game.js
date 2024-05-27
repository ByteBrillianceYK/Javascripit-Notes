const computerJi = parseInt(Math.random() * 100 + 1)
const aishwarya=document.getElementById('aishwarya')
const div = document.getElementById("results")
const tip = document.getElementById("tip")
const totalAttempts=document.getElementById("totalAttempts")
let count = 1
let flag=true
// const form = document.querySelector("form")
const button = document.querySelector("#button")

button.addEventListener('click', (e) => {
    e.preventDefault()
    const aishwarya1=parseInt(aishwarya.value)
    if (aishwarya1 < 1 || aishwarya1 > 100 || aishwarya1 == '' || isNaN(aishwarya1)) {
        flag = false
        alert("please enter valid guess")
    }
    if (flag) { 
        if (computerJi===aishwarya1) {
        div.innerHTML = "<h4>sai pakde hain!</h4>"
        totalAttempts.innerHTML=`total attempts taken to guess right no. ${count}`
        
    } else if (computerJi > aishwarya1) {
        div.innerHTML = "<h4>computerji bade hain</h4>"
        totalAttempts.innerHTML=`remaining attempts: ${10-count}`
    } else {
        div.innerHTML = "<h4>computerji chote hain</h4>"
        totalAttempts.innerHTML=`remaining attempts: ${10-count}`
    }
    }    
    count=count+1
})

