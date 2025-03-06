console.log(`=============task 1===============`);


const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];

let addR = arrayNumbers.map(  (element)=> {

    return element+10;
}


); 
console.log(addR);

console.log(`=============task 2===============`);
let addR1 = arrayNumbers.map(  (element)=> {

    return element*element*element;
}


); 
console.log(addR1);

console.log(`=============task 3===============`);

let addR2 = arrayNumbers.map(  (element,index)=> {

    return element+index;
}


); 
console.log(addR2);