
const employeeJson1 =   `{

    "name":"Aleix Melon",
    "id":"E00245",
    "role":["Dev","DBA"],
    "age":23,
    "doj":"11-12-2019",
    "married":false,
    "address": 
    {
        "street":"32, Laham St.",
        "city":"Innsbruck",
        "country":"Austria"

    },

    "reffered-by": "E0012"
}`
console.log(`=============Converting To Object================`);

const employeeObject = JSON.parse(employeeJson1);

console.log(employeeObject);

console.log(`=============Log on Console role - Dev==============`);


const role=employeeObject.role[0] ;

console.log(role);

console.log(`==============Log only last Name "Melon"==============`);

const melonResult = employeeObject.name.split(" ");

console.log(melonResult[1]);

console.log(`==============Log only joining year of employee =============`);

const yearResult = employeeObject.doj.split("-");

console.log(yearResult[2]);








