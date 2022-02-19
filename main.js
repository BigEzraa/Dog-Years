var myAge = 28
    // the variable represents my age which is 28.
var earlyYears = 2 
    // I choose the let function because the integer 2 will change.
earlyYears *= 10.5;

var earlyYears = 21

myAge -= 2;

var laterYears = myAge;
    /*I subtracted 2 from myAge which was 
    28 then I reassigned the answer to the variable laterYears.*/
laterYears *= 4;
    /* I reassigned the variable 'laterYears' 
    to equal the orginal 'laterYears' multiplied by 4.*/
var myAgeInDogYears = (earlyYears + laterYears);
    /* I added the variable 'earlyYears' which equalled 21 
    to the variable 'lateryears' which equalled 104 to get the result 
    of 'myAgeInDogyears' which was 125.*/
var myName = 'Quentin'.toLowerCase();
    /*I assigned 'Quentin' to the variable myName then made all of 
    the letters lowercase with the operator .toLowerCase */
console.log(`My name is ${myName}. I am ${myAge} in human years which 
is ${myAgeInDogYears} years old in dog years.`)
    /* I wrote a string out using backticks and the ${} operator so I could inject the variables myName, myAge, 
    and myAgeInDogYears into the string.*/
