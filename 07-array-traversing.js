

const array = [ 2,3,4,5,6,7,8];

for (let index = 0; index < array.length; index++) {
    const element = array[index];

    console.log(element);
    

}

console.log(`=========Sum of array element=========`);

let sum = 0;         // 0 

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    sum = sum + element ;                           // important step to add  2+3 , 5+4

    console.log(element);

    
}
 console.log( `Sum of the array : ${sum}`);

 console.log(`=============== To find Even Number from Array===========`);

 let array1 = [ 2,3,4,5,6,7,8,22,44,222,3333];

 let evenSum= 0;

 for (const element of array1 ){

    console.log(element);

    if (element%2==0) {
        
        console.log( element);

        evenSum = evenSum+ element
        
    }
         console.log(`Even Sum: ${evenSum}`);
         
    
 }

 console.log(`==========reverse traversing in array========`);
 
 let array55 = [2,3,4,5,6,7,8,22,44,222,3333];

 for (let index = array55.length-1; index >=0; index--) {

    const element = array55[index];

    console.log(element);
    

    
 }
 
 