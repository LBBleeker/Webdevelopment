//while
let w = 0;
while (w < 5) {
  console.log(`This is while iteration number ${w}`);
  w++;
}

//for
for (let i = 0; i < 5; i++) {
  console.log(`This is for iteration number ${i}`);
}

// Expected output:
// This is while iteration number 0
// This is while iteration number 1
// This is while iteration number 2
// This is while iteration number 3
// This is while iteration number 4
// This is for iteration number 0
// This is for iteration number 1
// This is for iteration number 2
// This is for iteration number 3
// This is for iteration number 4

//Excercise
//part 1
for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

//part 2
// Multiplication tables
const multiplier = 9;
for (let i = 0; i <= 10; i++) {
    let result = multiplier * i;
    console.log(multiplier + " * " + i + " = " + result);
}

// Bonus
for (let multiplier = 0; multiplier <= 10; multiplier++) {
    for (let i = 0; i <= 10; i++) {
        let result = multiplier * i;
        console.log(multiplier + " * " + i + " = " + result);
    }
}

//part 3
const assignGrade = function (score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "F";
  }
};

for (let i = 60; i <= 100; i++) {
  console.log("For " + i + " points, you'll get a(n) " + assignGrade(i));
}


const myColorArray = ["yellow", "blue", "red", "orange"];

// old style
let i = 0;
while (i < myColorArray.length) {
  console.log(myColorArray[i]);
  i++;
}

for (let i = 0; i < myColorArray.length; i++) {
  console.log(myColorArray[i]);
}

// new style using forEach
myColorArray.forEach(color => console.log(color));

// 1. The for loop is 3 lines, the while loop is 5 lines1
// 2. The forEach way is 1 line.
// 3. Array methods have the following advantages
// --> it's harder to get into an infinite loop
// --> you don't have to "manually" remember which iteration of the loop you're in with an index variable like "i".
// --> you immediately get the "thing" you're interested in, you do not have to manually grab it from the array
// --> the name forEach is more easily readable and understandable

const myColors = {
    colorWall: "blue",
    colorFruit: "orange",
    colorCar: "red",
    colorHair: "white",
    colorGras: "green",
};

for (let property in myColors) {
    console.log(myColors[property]);
}

// Yes, you're iterating now. But you're iterating over the *properties* of an
// object, not directly over the object.
// Only arrays have array methods.