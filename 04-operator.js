
function isEven(num){

        var result=num%2

    console.log(`Reminder is : ${result}`);
    console.log(`If Reminder is 0: EVEN or Its ODD number`);
    
       // ---==========Ternary Operator=========/////      // same condition using by ternary operator
    
       var resultOfNum=num%2==0 ? "EVEN" : "ODD";

       console.log(`Given Number is: ${resultOfNum}`);
       

    
}
isEven(7);
isEven(24);
isEven(25);
