/*
// CODING CHALLENGE #1️⃣.

// HEIGHT AND MASS VARIABLES
let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.95;
let johnMass = 92;

// MARK BMI
let markBMI = markMass / markHeight ** 2
console.log(markBMI)
let johnBMI = johnMass / (johnHeight * johnHeight)
console.log(johnBMI)

// BOOLEAN VARIABLE
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI)
*/


// CODING CHALLENGE #2️⃣.

// HEIGHT AND MASS VARIABLES
let markHeight = 1.69;
let markMass = 78;
let johnHeight = 1.95;
let johnMass = 92;

// MARK BMI
let markBMI = Math.trunc(markMass / markHeight ** 2)
console.log(markBMI)
let johnBMI = Math.trunc(johnMass / (johnHeight * johnHeight))
console.log(johnBMI)

// BOOLEAN VARIABLE
let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI)

if(markBMI > johnBMI){
    console.log(`Mark's BMI (${markBMI}) is Higher than John's!`)
}else{
    console.log(`John's BMI (${johnBMI}) is higher than Mark's!`)
}


