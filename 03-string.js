

var greet="Good morning";

var greetLength= greet.length; // length property 

console.log("Total number of Character: ", greetLength);

var charAtLastIndex = greet.charAt(0);  // method charAt

console.log("Character at last Index: ",charAtLastIndex);


var charAtLastBySmartWay= greet.charAt(greet.length-1);      // ***** smart way using lenght-1

console.log("Character At last index by smart way: ",charAtLastBySmartWay); 

var strOne= "Hello";
var strTwo= "Good Morning"

var concatResult= strOne.concat(strTwo);  // concat result

console.log("Concat Result: ", concatResult);

// String Template Backtick ` , $ {}

console.log("String One: ",strOne,"String Two: ",strTwo, "Concat Result: ", concatResult);

console.log(`String One: ${strOne}, String Two: ${strTwo}, Concat Result: ${concatResult}`);  // using  ECMAscript 6 features

var greet = "Good Morning" ;

var indexOfM= greet.indexOf("M");  // indexof method

console.log("Index of M: ",indexOfM);

var resultOfReplace= greet.replace("Morning","Evening");   // replace method

console.log(`Result Of Replace: ${resultOfReplace}`);

var greet= "Good Morning";

var upperCaseResult= greet.toUpperCase(); // touppercase method

console.log(`Greet Uppercase Result: ${upperCaseResult}`);  

var lowerCaseResult = greet.toLowerCase() ;    //  tolowercase method

console.log(`Greet LowerCase result: ${lowerCaseResult}`); 

var greet= "  Good Morning  "

var trimResult = greet.trim();           // trim method

console.log(`Trim Result: ${trimResult}`);

console.log(`Count Number Of Spaces: ${greet.length-trimResult.length}`);

var country = "  Germany    "

var trimStartResult = country.trimStart();    //trimStart method

console.log(`Trim Start result: ${trimStartResult}`);

var trimEndResult =country.trimEnd();          // trimEnd method

console.log(`Trim End Result: ${trimEndResult}`);

console.log(`Spaces at Start: ${country.length-trimStartResult.length}`);  //number of spaces at start 

console.log(`Spaces at end: ${country.length-trimEndResult.length}`);   // number of spaces at end

var age = 26;

var ageToString=age.toString();      // toString Method use to convert value to string

console.log(`Age To String: ${ageToString} and its Datatype: ${typeof(ageToString)}`);

var country = "  Germany    "

var resultOfIncludes=country.includes("any");        // includes method    gives ans in True/false
console.log(`Result Of includes "any": ${resultOfIncludes}`);

var searchResult=country.search("er");               // search method 
console.log(`Search result for "er": ${searchResult}`);

var country = "  Germany    "

var sliceResult=country.slice(3,8); // slice method  (start,end)

console.log(`slice result: ${sliceResult}`);

var code ="Javascript";

var subStringResult=code.substring(1,6);   //subString method

console.log(`Sub String Result: ${subStringResult}`);

var intro="My name is Pranay Bawane";

var splitResult=intro.split(" ");

console.log(splitResult , "Datatype: ",typeof(splitResult));

console.log(splitResult);

console.log(`Total number of words: ${splitResult.length}`);






























