

console.log(`------------object cloning============`);



let team = {
        
    name: "Virat",
    age: "35",
    score: 134 

}


let clonnedObject=Object.assign({},team);

console.log(clonnedObject);

console.log(`=========================== Merger two object================`)

let team2 = {
                    
    name: "Head",
    age: "32",
    score: 96

}

const team3 = {
        
    pin: 2222

}

const mergedTeam = Object.assign({},team2,team3);  // always add first object first  ({},1,2)

console.log(mergedTeam);
