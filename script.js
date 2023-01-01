//JavaScript Fundamentals – Part 1️⃣


// CODING CHALLENGE #1️⃣

// HEIGHT AND MASS VARIABLES
/* let markHeight = 1.69;
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


// CODING CHALLENGE #2️⃣

// HEIGHT AND MASS VARIABLES
/* let markHeight = 1.69;
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
 */

//CODING CHALLENGE #3️⃣

/*
let minimumScore = 100;

let dolphinScoreOne = 96;
let dolphinScoreTwo = 108;
let dolphinScoreThree = 89;

let averageDolphinScore = Math.trunc((dolphinScoreOne + dolphinScoreTwo + dolphinScoreThree ) / 3)
console.log(averageDolphinScore);

let koalaScoreOne = 88;
let koalaScoreTwo = 91;
let koalaScoreThree = 115;

let averageKoalaScore = Math.trunc((koalaScoreOne + koalaScoreTwo + koalaScoreThree) / 3)
console.log(averageKoalaScore)

if (averageDolphinScore >= minimumScore && averageDolphinScore > averageKoalaScore) {
    console.log("Dolphins won!")
} else if (averageDolphinScore >= minimumScore && averageDolphinScore < averageKoalaScore) {
    console.log("Koalas won!")
} else if (averageDolphinScore < minimumScore && averageDolphinScore == averageKoalaScore) {
    console.log("Not enough score, but draw.")
} else if (averageDolphinScore < minimumScore && averageDolphinScore > averageKoalaScore) {
    console.log("Not enough score, but Dolphins won.")
}
else if (averageDolphinScore < minimumScore && averageDolphinScore < averageKoalaScore) {
    console.log("Not enough score, but Koalas won.")
}
else if (averageDolphinScore >= minimumScore && averageDolphinScore == averageKoalaScore) {
    console.log("Draw!")
} else if (averageDolphinScore < minimumScore) {
    console.log("Not enough score.")
}
else {
    console.log("es tu amoagdo mashin xui znaet brat")
}
 */


//CODING CHALLENGE #4️⃣
/* let bill = 10

let tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(tip)

let total = tip + bill
console.log(total)

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}`) */



//JavaScript Fundamentals – Part 2️⃣


/* let value = Math.floor(Math.random() * 3)  + 1
console.log(value)

if (value = 1 && value) {
    console.log("rock")
} else if (value = 2) {
    console.log("paper")
}else{
    console.log("scissor")
}
 */

//PART-2️⃣ CODING CHALLENGE #1️⃣

/* let calcAverage = (a, b, c) => Math.trunc((a + b + c) / 3);
let dolphinScore = calcAverage(44, 23, 71);
console.log(dolphinScore);

let KoalaScore = calcAverage(65, 54, 49);
console.log(KoalaScore);

let checkWinner = function(avgDolphins, avgKoalas)
{
    if (avgDolphins >= avgKoalas * 2){
        console.log(`Dolphins win 🏆 (${avgDolphins} vs ${avgKoalas})`)
    }
    else if (avgKoalas >= avgDolphins * 2){
        console.log(`Koalas win 🏆 (${avgKoalas} vs ${avgDolphins})`)
    }
    else{
        console.log("No team wins...")
    }
}

checkWinner(dolphinScore, KoalaScore)
 */


//PART-2️⃣ CODING CHALLENGE #2️⃣

let bill = 100;

let tip;

const calcTip = function(bill){
    if(bill <= 300 && bill >= 50){
        console.log(bill * 0.15)
    }
    else{
        console.log(bill * 0.2)
    }
}

console.log(calcTip)

