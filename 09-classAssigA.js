
console.log(`================Vehicle class==========`);


class Vehicle {

       brand
       model
       manufactureDate
       price
       fuelType


    constructor(brand,model,manufactureDate,price,fuelType) {

        this.brand=brand;
        this.model=model;
        this.manufactureDate=manufactureDate;
        this.price=price;
        this.fuelType=fuelType;
        
    }
}
 const vehicle1= new Vehicle("Tata Motors","CURVV","2024","Petrol");
 console.log(vehicle1);
 
const Vehicle2= new Vehicle("Hyundai","Creta","2023","Petrol");
console.log(Vehicle2);

const vehicle3= new Vehicle("Maruti","Swift","2020","Diesel");
console.log(vehicle3);

const vehicle4= new Vehicle("Toyota","Innova","2019","Diesel");
console.log(vehicle4);

const vehicle5= new Vehicle("Ford","Fortuner","2022","Diesel");
console.log(vehicle5);


console.log(`=============College Class====================`);


class College {

    name
    location
    courses
    establishedYear




    constructor(name,location,courses,establishedYear) {

        this.name=name;
        this.location=location;
        this.courses=courses;
        this.establishedYear=establishedYear;
        
    }
}
 
const college1= new College("COEP","Pune","Engineering","1970");
console.log(college1);

const college2= new College("IIT","Mumbai","Engineering","1960");

console.log(college2);

const college3 = new College("MIT","Pune","Management","1990");
console.log(college3);

const college4 = new College("IIM","Ahmedabad","Management","1972");
console.log(college4);


