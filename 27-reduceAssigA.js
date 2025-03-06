


console.log(`==============task 1=============`);

const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];

let arr1 = arrayNumbers.reduce( (rt , element)=> {

       return rt + element;

}


); 
console.log( arrayNumbers);

console.log(`sum of above array: ${arr1}`);


console.log(`==============task 2=============`);

let arr4 = arrayNumbers.filter( (element) => {

    return element%5==0 ;

}


);

console.log(arr4);

let arr5 = arr4.reduce( (rt , element)=> {

    return rt + element;

}


); 


console.log(`sum of numbers multiple of 5: ${arr5}`);