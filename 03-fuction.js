
// Type 1  fuction with no argument or no parameter or no return value

function test(){
    console.log("Test");
    
}
test();

// type 2  function with argument or parameter or no return value

function square(num) {

    console.log(`Finding the square of: ${num}`);

    var squareResult=(num*num);

    console.log(`Square of ${num} is: ${squareResult}`)
     


}

square(8);
square(10);

// type 3 function  with argument or parameter and return value 

function addition(n1,n2,n3,n4) {

    console.log(`Addition of ${n1},${n2},${n3},${n4}: `);

    var additionResult=(n1+n2+n3+n4);

    return additionResult;

   
    
}

var returnValue=addition(1,1,1,1);
console.log(`Addition is: ${returnValue}`);



var returnValue=addition(2,2,2,2);

console.log(`Addition is: ${returnValue}`);

function fullName(firstName,middleName,lastName) {

  var fullName= (firstName +middleName +lastName);

  console.log(`My full name is: ${fullName}`);
  
}

fullName("Pranay ","Vinayakrao " ,"Bawane")