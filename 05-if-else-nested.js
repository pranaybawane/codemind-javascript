
function dreamJob(gotplacement) {

    if (gotplacement) {

        console.log(`i will buy cloths`);

        var isMnc = true;
        if (isMnc) {
                console.log(`i will go US`);
                

            
        } else {
            console.log(` i will go goa`);
            
        }
        
        
    } else {
        console.log(`i will eat puri`);
        
    }

}
 dreamJob(true);


   var eligibleVote = function (age) {

    if (age==0 || age<0|| age>=130||age==null) {

        console.log(`Invalid data: age - ${age}`);
        
        
    } else {
        if (age>=18) {

            console.log(`YES you are eligible for vote`);
            
            
        } else {
            console.log(`NO you are not eligible for vote`);
            
        }
        
    }

   

   }
   eligibleVote(18);
   eligibleVote(140);
   eligibleVote(null);


   var marriageEligibility = function  ( gender , age) {

    if (gender=="Male" && age>=21 || gender=="Female" && age>=18 ) {

        console.log(`Marriage Eligibility: YES :Gender : ${gender}: Age : ${age} `);
        
        
    } else {
        console.log(`Marriage Elilgibility: NO : Gender: ${gender}: Age: ${age}`);
        
    }

    


   }
   
   marriageEligibility("Male", 17);
   marriageEligibility("Female", 21);
   marriageEligibility("Female", 16);
   marriageEligibility("Male", 28);

