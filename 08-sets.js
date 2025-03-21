

const mySet= new Set();

mySet.add(10);
mySet.add(20);
mySet.add(10);
mySet.add(30);
mySet.add(40);

console.log(mySet);


console.log("====== Remove Duplicate elements =======");

const array = [10, 20, 30, 20, 10, 50, 90];

console.log(array);

const newArray = [...new Set(array)]               ///           (...new Set(  ) 

console.log(newArray);


