 console.log(`===========task 1==================`);
 
const  arrayNumbers = [1,-7,40,502,-77,91,0,108,89,-601 ];

arrayNumbers.forEach( (element,index) =>{

console.log(`Element : ${element} => Index : ${index}`);


}


)
console.log(`===========task 2==================`);

arrayNumbers.forEach( (element) => {
    
    if (element>0) {
        
        console.log(`Positive Number: ${element}`);
        
    }




}


)

console.log(`===========task 3==================`);
arrayNumbers.forEach( (element) => {
    
    if (element<0) {
        
        console.log(`Negative Number: ${element}`);
        
    }




}
)
console.log(`===========task 4==================`);

arrayNumbers.forEach( (element) => {
    
    if (element%2==0) {
        
        console.log(`Even Number: ${element}`);
        
    }




}
)

console.log(`===========task 5 Sum of array==================`);
const  arrayNumbers1 = [1,-7,40,502,-77,91,0,108,89,-601 ];


let sum = 0;        

for (let index = 0; index < arrayNumbers1.length; index++) {
    const element1 = arrayNumbers1[index];
    
    sum = sum + element1 ;                           // important step to add  2+3 , 5+4

   

    
}
 console.log( `Sum of the array : ${sum}`);
    
 console.log(`===========task 6  Even index element==================`);

 arrayNumbers1.forEach(  ( element, index) =>{

        if (index%2==0) {   

            console.log(`Element with even Indexed : ${element}`);
            

 
    
     }

    }
 )



