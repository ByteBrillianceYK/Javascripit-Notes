const computerJi = parseInt(Math.random() * 100 + 1)
// console.log(computerJi)

const form = document.querySelector('form')
// const abhishekJi = form.children[0]
// console.log(abhishekJi)
const results = document.getElementById('results')
const tip = document.getElementById('tip')
let button = document.getElementById('button')
// console.log(button)

const remainingAttempts = document.getElementById('remainingAttempts')
let count = 1
let flag=true

form.children[1].addEventListener('click', (e) => {
    e.preventDefault()
    const abhishekJi = parseInt(form.children[0].value)
    

    if (computerJi === abhishekJi) {
        flag=true
        results.innerHTML = "sai pakde hain!"
        tip.innerHTML = ""
        remainingAttempts.innerHTML = `you took total ${count} to guess the right number`
        let button1 = document.createElement('button')
        button1.innerText = "Restart"
        button.appendChild(button1)
        
    } else {
        flag=false
        results.innerHTML = "galat pakde hain!"
        if (computerJi > abhishekJi) {
            tip.innerHTML="<h4>computerJi is bigger</h4>"
        } else {
            tip.innerHTML = "<h4>computerJi number is smaller</h4>"
            console.log(computerJi)
        }
        count = count + 1
        remainingAttempts.innerHTML = `remaining chances ${ 11-count }`
    }
})


