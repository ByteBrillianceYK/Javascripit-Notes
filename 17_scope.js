//global scope aur local scope

//nested functions:

// function dad() {
    
//     const walet = "2000 rupaye";

//     const array=[9494,4949,9303]
    
//     function childFunction1() {
        
//         const childPocketMoney = "das rupaye";

//         console.log(walet,"pappa das rupaye dedo ya fir main chura lunga aur apko pata bhi nai chalega")

//         console.log(array);
//     }

//     childFunction1()

// }

// dad()


// if (true) {

//     const home = "this is my home variable"
    
//     if (home == "this is my home variable") {
        
//         const bedRoom = "this is my bed room variable"
        
//         console.log(home)

//     }

//     // console.log(bedRoom)        //error

// }


// console.log(home)   //error
// console.log(bedRoom)    //error



const output = function () {

    return "muze chai dedo"

}



console.log(output());

function global() {
    
    const globalVariable = "globalVariable";
    
    function childFunction1() {
        
        const childVariable = "childVariable";

        console.log(globalVariable)

    }  

    console.log(childVariable);

}