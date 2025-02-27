
console.log(`=================Traversing in array ==============`);

let arrayNum = [2,3,1,5,6,7,4,8] ;

for (let index = 0; index < arrayNum.length; index++) {
    
   let value =arrayNum[index];

     console.log(value);
     
    
}


console.log(`=================Array method access syntax or read================`);


let array = ["Pune","Mum","LA","NY","Italy","Tokyo"] ;

       let accessArray = array[4] ;            //        access using index number  Don't use dot after array 

       console.log(accessArray);
       

console.log(`====================Array Update===================`);

let array1 = ["Pune","Mum","LA","NY","Italy","Tokyo"] ;

array1[2]= "AMT";                                                      //   array update using index number

console.log(array1);

     
console.log(`=================Array includes method==============`);

let array2 = ["Pune","Mum","LA","NY","Italy","Tokyo"] ;

let includesResult= array2.includes("LA");                      // array.includes() method always use paranthesis().           

console.log(includesResult);


console.log(`=================Array.length==============`);

let array3 = ["Pune","Mum","LA","NY","Italy","Tokyo"] ; 

let lengthResult=array3.length;

console.log(lengthResult);


console.log(`=================Push method - Add value to end of array==============`);

let array4 = ["Pune","Mum","LA","NY","Italy","Tokyo"] ;

let pushResult=array4.push("Paris");                   // push method adds value to the end only

console.log(array4);

console.log(`=================Pop method - remove value to end of array==============`);

let array5 = ["Pune","Mum","LA","NY","Italy","Tokyo"] ; 

let popResult=array5.pop();                          //   pop method removes value from end only

console.log(popResult);

console.log(array5);

console.log(`=================Unshift method - Add value to beginning of array==============`);

let array6 = ["Pune","Mum","LA","NY","Italy","Tokyo"] ; 

let UnshiftResult = array6.unshift("Mexico");             // unshift method add value only to the beginning of the array

console.log(array6);

console.log(`=================shift method - remove value from beginning of array==============`);

let array7 = ["Pune","Mum","LA","NY","Italy","Tokyo"] ; 

let shiftResult = array7.shift();                               // shift method removes value from the beginning of the array

console.log(array7);

console.log(`============== Slice method to remove element=============`)

let array11= [2,3,1,5,6,7,4,8,33,44,22,66,77];

let spliceOneResult=array11.splice(5);                // splice using only one index number

console.log(array11);

console.log(`============== Slice method to remove element form index number to given number=============`)

let array22 = [2,3,1,5,6,7,4,8,33,44,22,66,77];

let spliceTwoResult = array22.splice(3,4);      // splice using two number   "3" - index number  "4" - number of element to remove

console.log(array22);

console.log(`============== Slice method to add element without removing any element from index number=============`)

let array33 = [2,3,1,5,6,7,4,8,33,44,22,66,77];

let spliceThreeResult = array33.splice(3,0,111,222)                 // "0" - represents without removing any element add 111,222

console.log( array33);

console.log(`======= slice method to remove and add number of element ====`);

let array44 = [2,3,1,5,6,7,4,8,33,44,22,66,77];

let spliceRemoveAddResult = array44.splice(4,3,111,222,333)          // "3" - represents to remove 3 element from index number 4 and add 111,222,333 

console.log(array44);


