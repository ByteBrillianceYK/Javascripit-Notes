// const cricketMatch = {
//     players: 11,
//     totalNoOfbowlers: 5,
//     batters: 6,
//     captain: "Rahit Sharma",
//     hasViratKohli:false
// }

// const { captain, totalNoOfbowlers:bowlers , hasViratKohli:kohli} = cricketMatch

// const { bowlers} = cricketMatch

// const { hasViratKohli } = cricketMatch

// console.log(`Indian cricket team is playing very well under the leadershiop of ${captain}. Indian cricket team has total ${bowlers} bowlers. It is ${kohli} that this year we have got virat kohli in the team`)




const todayCloth = {
    clothName: "pant-shirt",
    reason: "takingClass",
    isWashed: true,
}

const { clothName, reason:whyAmIWearingThisCloth, isWashed } = todayCloth

// console.log(clothName, reason,isWashed)



console.log(`Hey Guys! today i am wearing ${clothName}. the reason for wearing the ${clothName} is because i am  ${whyAmIWearingThisCloth} . this is ${isWashed} that my cloths are washed  `)