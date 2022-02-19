let ch = "y";
for (let calculations = 0; (ch = "y"); calculations++) {
  do {
    var start = confirm("(-B +/- Sqrt(B2 - 4*A*C))/2*A");
  } while (start !== true);
  console.log(start);
  console.log("(-B +/- Sqrt(B2 - 4*A*C))/2*A");
  let a = prompt("A =");
  let b = prompt("B =");
  let c = prompt("C =");
  let d = b ** 2 - 4 * a * c;
  console.log("A = " + a);
  console.log("B = " + b);
  console.log("C = " + c);
  console.log("D = " + d);
  let e = Math.sqrt(d);
  let f = (-b - e) / (2 * a);
  let g = (-b + e) / (2 * a);
  console.log("X = " + f + " v X = " + g);
  do {
    let ch = prompt("Another calculation? y/n");
    if (ch != "y" && ch != "n") {
      confirm("thats no y or n");
      console.log("input question on other calculation: " + ch);
    }
  } while (ch != "y" && ch != "n");
  console.log(ch);
}
