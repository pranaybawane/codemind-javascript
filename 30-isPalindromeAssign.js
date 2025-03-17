

 function isPalindrome(string) {  




    let stringSplit=string.split("");
    
    let stringReverse = stringSplit.reverse();

    

    let stringReverseJoin = stringReverse.join ("");
                    


    if (string == stringReverseJoin ) {

        console.log(`Given string ${string} :=> is a Palindrome.`);
        
        
    } else {

        console.log(`Given string ${string} :=>  is not a Palindrome`);
        
        
    }
    
} 

isPalindrome("madam");
 isPalindrome("141");
 isPalindrome("Sunday");
 isPalindrome("mom");
 isPalindrome("listen");
 isPalindrome("dad");