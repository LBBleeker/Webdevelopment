//BASICS
// Step 1
const makePizza = function () {
  console.log("Roll dough");
  console.log("Spread tomato sauce");
  console.log("Grate cheese");
  console.log("Bake in oven");
};

makePizza();
makePizza();
makePizza();

// Step 2
const makeSushi = function () {
  console.log("Boil rice");
  console.log("Cut avocado and fish");
  console.log("Roll sushi");
};
makeSushi();
makeSushi();
makeSushi();
makePizza();
makePizza();

//ARGUMENTS
// No arguments
const paintWall1 = function () {
  console.log("The wall has been painted red");
};
paintWall1();

// Single argument
const paintWall2 = function (color) {
  console.log(`The wall has been painted ` + color); // String concatenation
  // or
  // console.log(`The wall has been painted ${color}`); // String interpolation
};
paintWall2("green");
paintWall2("blue");

// Multiple arguments
const paintWall3 = function (whichWall, color) {
  console.log(`The` + whichWall + ` wall has been painted` + color); // String concatenation
  // or
  // console.log(`The ${whichWall} wall has been painted ${color}`); // String interpolation
};
paintWall3("south-east", "purple");
paintWall3("north", "yellow");

// The order of the arguments matters
paintWall3("yellow", "north"); // The yellow wall has been painted north

// The order in the function definition also matters
const paintWall4 = function (color, whichWall) {
  console.log(`The ` + whichWall + ` wall has been painted ` + color); // String concatenation
  // or
  // console.log(`The ${whichWall} wall has been painted ${color}`); // String interpolation
};
paintWall4("south-east", "purple"); // The purple wall has been painted south-east

// If we change the order in the definition and the call we get a good result again
const paintWall5 = function (color, whichWall) {
  console.log(`The ` + whichWall + ` wall has been painted ` + color); // String concatenation
  // or
  // console.log(`The ${whichWall} wall has been painted ${color}`); // String interpolation
};
paintWall5("blue", "west"); // The west wall has been painted blue

//RETURN
//Checking if a number is big
const numberIsBig = function (number) {
  if (number > 100) {
    return true;
  } else {
    return false;
  }
};
//or
/*
const numberIsBig = function (number) {
  return number > 100;
};
*/

console.log(numberIsBig(150));
console.log(numberIsBig(50));
console.log(numberIsBig(0));
console.log(numberIsBig(999));

//Bouncer at a club
const getBouncerReaction = function(maxVisitors, currentVisitors, ageOfPotentialVisitor) {
    if (ageOfPotentialVisitor < 18) {
        return "this is a club for adults";
    }

    if (currentVisitors >= maxVisitors) {
        return "it's too busy now, come back later";
    } else {
        return "come in";
    }
};
//or
/*
const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    if (ageOfPotentialVisitor < 18) return "this is a club for adults";
    if (currentVisitors >= maxVisitors)
        return "it's too busy now, come back later";
    return "come in";
};
//or
const getBouncerReaction = function(
    maxVisitors,
    currentVisitors,
    ageOfPotentialVisitor
) {
    let response;
    if (ageOfPotentialVisitor < 18) {
        response = "this is a club for adults";
    } else if (currentVisitors >= maxVisitors) {
        response = "it's too busy now, come back later";
    } else {
        response = "come in";
    }
    return response;
};
*/
console.log(getBouncerReaction(2000, 0, 15)); // "this is a club for adults"
console.log(getBouncerReaction(2000, 1999, 50)); // "come in"
console.log(getBouncerReaction(2000, 2000, 40)); // "it's too busy now, come back later"
console.log(getBouncerReaction(2000, 2999, 30)); // "it's too busy now, come back later"

//Calculating the average
const calculateAverage = function(
    number1,
    number2,
    number3,
    number4,
    number5
) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    return average;
};
console.log(calculateAverage(1, 1, 1, 1, 1)); // 1
console.log(calculateAverage(1, 2, 3, 4, 5)); // 3
console.log(calculateAverage(-10000, 0, 0, 0, 5000)); // -1000

//Bonus solution
const calculateAverage2 = function (
  number1,
  number2,
  number3,
  number4,
  number5
) {
  const total = number1 + number2 + number3 + number4 + number5;
  const average = total / 5;
  const averageRounded = Math.round(average);
  return averageRounded;
};

console.log(calculateAverage2(1, 1, 1, 1, 1)); // 1
console.log(calculateAverage2(1, 2, 3, 4, 5)); // 3
console.log(calculateAverage2(-10000, 0, 0, 0, 5000)); // -1000
console.log(calculateAverage2(91, 87, 65, 43, 21)); // 61 (61.4)

//THREE WAYS TO WRITE THEM
//Function: Declaration
function doSquareCalculation(number1, number2) {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
}

//Function: Expression
const doSquareCalculation2 = function (number1, number2) {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
};

//Short solution
const doSquareCalculation3 = function (number1, number2) {
  const sum = Math.pow(number1) + Math.pow(number2);
  return Math.pow(sum);
};
//function: Arrow
const doSquareCalculation4 = (number1, number2) => {
  const number1Squared = number1 * number1;
  const number2Squared = number2 * number2;
  const sum = number1Squared + number2Squared;
  const sumSquared = sum * sum;
  return sumSquared;
};

//Calling Fuctions
//"hey kiddo"
const isAdult = function(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
};

const greet = function(age) {
    if (isAdult(age)) {
        return "Hello there";
    } else {
        return "Hey kiddo";
    }
};

console.log(greet(65)); // "Hello there"
console.log(greet(10)); // "Hey kiddo"

// We can make this a lot shorter by using arrow functions, the ternary if
// statement and returning booleans immediately. You don't need to write it
// this short, but it's good to see that it's possible.

const isAdultShort = age => age >= 18;

const greetShort = age => (isAdult(age) ? "Hello there" : "Hey kiddo");

console.log(greetShort(65)); // "Hello there"
console.log(greetShort(10)); // "Hey kiddo"

//First VAT
const calculateVAT = function(basePrice, VATPercentage) {
    return basePrice * (VATPercentage / 100);
};

const calculatePriceIncludingVAT = function(basePrice, VATPercentage) {
    const VAT = calculateVAT(basePrice, VATPercentage);
    return basePrice + VAT;
};

console.log(calculatePriceIncludingVAT(1000, 21)); // 1210
console.log(calculatePriceIncludingVAT(2, 9)); // 2.18

//Second VAT
const calculateBasePrice = function(priceIncludingVAT, VATPercentage) {
    const basePrice = priceIncludingVAT / ((100 + VATPercentage) / 100);
    return basePrice;
};

const calculateBasePriceAndVAT = function(priceIncludingVAT, VATPercentage) {
    const basePrice = calculateBasePrice(priceIncludingVAT, VATPercentage);
    const VAT = priceIncludingVAT - basePrice;
    return [basePrice, VAT];
};

console.log(calculateBasePriceAndVAT(1210, 21)); // [1000, 210]
console.log(calculateBasePriceAndVAT(2.18, 9)); // [2, 0.18]