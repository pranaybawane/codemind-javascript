

console.log(`-------- object freezing----------`);



let team = {
        
    name: "Virat",
    age: "35",
    score: 134 

}

Object.freeze(team);               // oject.freeze

team.match= 11;

console.log(team);
