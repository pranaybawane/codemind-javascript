
console.log(`==============task 1=============`);

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

let arr1 = arrayNumbers.filter( (element) => {

    return element >50 ;

}


); 

console.log(arr1);
console.log(`==============task 2=============`);

let arr2 = arrayNumbers.filter( (element) => {

    return element%2==0 ;

}


); 
console.log(arr2);
console.log(`==============task 3=============`);
let arr3 = arrayNumbers.filter( (element) => {

    return element%2==1 ;

}


); 
console.log(arr3);

console.log(`==============task 4=============`);
let arr4 = arrayNumbers.filter( (element) => {

    return element%5==0 ;

}


); 
console.log(arr4);
console.log(`==============task 5=============`);
let arr5 = arrayNumbers.filter( (element) => {

    return element>20 && element<50 ;

}


); 
console.log(arr5);