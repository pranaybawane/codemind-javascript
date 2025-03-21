

let student ={
    
        "employee_id": 11,
   
        "name": "Jenny",
   
        "isMarried": true,
   
        "skills": ["Java", "React", "Angular", "JavaScript"],
   
        "address": {
   
           "flat": 1005,
   
           "floor": 10,
   
           "street": "Wakad",
   
           "city": "Pune",
   
           "PIN": 411057
        }
   
      
}   


const studentJsonConvert=JSON.stringify(student);

console.log(studentJsonConvert);
