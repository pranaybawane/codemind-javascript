
console.log(`==================program to find vovels ==========================`);


var fruit= "Javascript Love";

var vovels= "aeiou" ;

for (let index = 0; index < fruit.length; index++) {
    
    var char = fruit.charAt(index);
    
    if (vovels.includes(char)) {

        console.log(`${char}`);
        
        
    }
}