
console.log(`====================jump statement  type 1 Break====================`);


for (let index = 0; index <= 10; index++) {
    
    console.log(index);

    if (index==6) {
        
        break;                                 //   jump statement break is used 
    }
    
    
}

console.log( `=======================jump statement type 2 Continue========================================`);


for (let index = 0; index <= 10; index++) {
    
    console.log( ` start: ${index}`);

    if (index==7) {

        continue;
        
    }
   
    
    console.log( `end : ${index}`);
}





