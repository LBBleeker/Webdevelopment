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
/*
const catBreeds = [{
 name: "Abyssinian",
 description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
 dog_friendly: 4,
 energy_level: 5,
 life_span: "14 - 15",
 origin: "Egypt",
 temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
 wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
 food: {favourite_food: "fish",
 medium_liked_food: "dried fruits", 
 disliked_food: "walnuts"
 }},
 {name: "Aegean",
 description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
 dog_friendly: 4,
 energy_level: 53,
 life_span: "9- 12",
 origin: "Greece",
 temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
 wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
 food: {favourite_food: "tuna",
 medium_liked_food: "canned food", 
 disliked_food: "all fruits"
 }},
 {name: "American Bobtail",
 description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
 dog_friendly: 5,
 energy_level: 3,
 life_span: "11 - 15",
 origin: "United States",
 temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
 wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
 food: {favourite_food: "meaty things",
 medium_liked_food: "tuna", 
 disliked_food: "canned food"
 }}
 ]*/
