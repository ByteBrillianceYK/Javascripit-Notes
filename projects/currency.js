let url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd/inr.json"


const amountInput = document.querySelector('input')
const from = document.getElementById('from')
const to = document.getElementById('to')
const button = document.querySelector('button')
const h4=document.querySelector('h4')


button.addEventListener('click', (e) => { 
    e.preventDefault()
    const value=amountInput.value
    const fromVal = from.value
    const toVal = to.value
    const api =`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromVal.toLowerCase()}/${toVal.toLowerCase()}.json`
    
    fetch(api).then(res => res.json())
        .then(data => {
            if (data.inr){
                const UsdToInrRate = data.inr
            // console.log(UsdToInrRate)
            // console.log(data)
            // console.log(value)
                h4.innerHTML=value*UsdToInrRate
            } else {
                const UsdToInrRate = data.usd
                h4.innerHTML=value*UsdToInrRate
            }
            

    })






})