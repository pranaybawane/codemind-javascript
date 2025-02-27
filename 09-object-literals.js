

let person = {
    
    name: "Pranay" ,
    age: 22 ,
    city : "Pune",

}   

console.log(person);

console.log(`========Accessing properties =====`);

console.log(`Person Name: ${person.name}`);
console.log(`Age: ${person.age}`);

console.log( ` ====Updating properties====`);

person.age= 30;
person.city="Mumbai"

console.log(person);

console.log(`==========deleting properties=======`);

delete person.city ;

console.log(person);

console.log(`========adding properties =====`);

person.designation="Developer";

console.log(person);


console.log( `============nested object=======`);


let student = {
    
    name: "Pranay" ,
    age: 22 ,
    city : "Pune",

    address: {
        society: "HMT",
        flat :   1005,
        pin: 200,
    }

}

console.log(`========Accessing nested object=======`);

console.log(`person flat no: ${student.address.flat}`);

console.log(`person pin : ${student.address.pin}`);


console.log(`==========adding properties to nested object====`);

student.address.floorNumber= 4;

console.log(student.address);


console.log(`========Object with action========`);

let employee = {
    
    name: "Pranay" ,
    age: 22 ,
    city : "Pune",

    walk: function () {

        console.log(`I can walk.....`);
        
        
    },

    details: function () {

        console.log(`person name: ${this.name} , City: ${this.city}`);
        
        
    }

}   
      employee.walk();
      employee.details();

console.log(`=============Get keys and values from object=============`);

let team = {
        
    name: "Virat",
    age: "35",
    score: 134 

}

const teamplayer= Object.keys(team);
console.log(teamplayer);

const teamPlayerName=Object.values(team);
console.log(teamPlayerName);

























