

const fruitsSeasonal= ["Banana","Orange","Apple","Mango","Water Melon"];

let first=fruitsSeasonal[0];
console.log(`First Fruit: ${first}`);

let last = fruitsSeasonal[4];
console.log(`Last Fruit: ${last}`); 

console.log(` ==========Task 2=========`);

let fruitsSeasonal1 =fruitsSeasonal.unshift("Papaya");

console.log(fruitsSeasonal);

console.log(`==========Task 3==========`);

let fruitsSeasonal2 = ['Papaya', 'Banana', 'Orange', 'Apple', 'Mango', 'Water Melon'];

 let fruitsSeasonal3 =fruitsSeasonal2.splice(4,1);

console.log(fruitsSeasonal2);

console.log(`==========Task 4==========`);

let fruitsSeasonal4 =fruitsSeasonal2.push("Pineapple");

console.log( fruitsSeasonal2);  

console.log(`=======Task 5============`);

let fruitsSeasonal5 =fruitsSeasonal2.splice(4,0,"Dragon Fruit");

console.log(fruitsSeasonal2);

console.log(`=========Task 6==========`);

let fruitsSeasonal6=fruitsSeasonal2.splice(2,1,"Kiwi");

console.log(fruitsSeasonal2);

console.log(`=========Task 7==========`);


let fruitsSeasonal7= fruitsSeasonal2.slice(1,5);

console.log(fruitsSeasonal7);

console.log(`===========Task 8=========`);

let fruitsSeasonal8= fruitsSeasonal2.splice(fruitsSeasonal2.length-3);

console.log(fruitsSeasonal8);















