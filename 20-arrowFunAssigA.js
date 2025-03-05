

console.log(`==========With no arg and no return=========`);

let greet = ()=>{

    console.log("Good Morning, Today is Wednesday");
    
}
greet();

console.log(`==========With 3 Agrs and no return value, multiplication=====`);

let multiplication= (n1,n2,n3)=>{

let multiResult= n1*n2*n3 ;

console.log( `Multiplication of: ${n1},${n2},${n3} = ${multiResult}`);


}
multiplication(5,5,2);

console.log(`==========With 3 Agrs and no return value, with default value 1====`);

let multiplication1= (n1,n2,n3=1)=>{

    let multiResult= n1*n2*n3 ;
    
    console.log( `Multiplication of: ${n1},${n2} = ${multiResult}`);

    
    }
    multiplication1(10,4);

    console.log(`==========With 5 Agrs and  return value, Addition====`);

    let addition= (n1,n2,n3,n4,n5)=>{
          
        let additionResult= n1+n2+n3+n4+n5;

        console.log(`Addition of ${n1},${n2},${n3},${n4},${n5} : ${additionResult}`);
        


    }
    addition(100,100,200,349,756);




    console.log(`==========With 5 Agrs String , concat====`);

    let addition1= (n1,n2,n3,n4,n5)=>{
          
        let additionResult= n1+n2+n3+n4+n5;

        console.log(`String value concat : ${additionResult}`);
        


    }
     addition1("I am","learning","ES6","features","in depth");