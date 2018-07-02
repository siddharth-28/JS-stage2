var cars = ["Saab", "Volvo", "BMW"];
var veg=["Brinjal","Potato"];
cars[0] = "Opel";
console.log(cars);
console.log(cars.length);
cars[cars.length]="Mercedes";
console.log(cars);
cars.pop();
console.log(cars);
cars.push("Kiwi");
console.log(cars);
cars.splice(1,2);
console.log(cars);
var merge= cars.concat(veg);
console.log(merge)
cars.push("Bentley","Polo");
var slicing=cars.slice(1);

console.log(slicing);
