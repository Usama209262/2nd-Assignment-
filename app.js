// Q # 1 : Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).


var character = prompt("Enter a character:");
var asciiCode = character.charCodeAt(0);

if (asciiCode >= 48 && asciiCode <= 57) {
    console.log("The character is a number.");
} else if (asciiCode >= 65 && asciiCode <= 90) {
    console.log("The character is an uppercase letter.");
} else if (asciiCode >= 97 && asciiCode <= 122) {
    console.log("The character is a lowercase letter.");
} else {
    console.log("The character is not a number or letter.");
}







// Q # 2 :  Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.



var firstInteger = parseInt(prompt("Enter the first integer:"));
var secondInteger = parseInt(prompt("Enter the second integer:"));

if (firstInteger === secondInteger) {
    console.log("The two integers are equal.");
} else if (firstInteger > secondInteger) {
    console.log("The larger integer is: " + firstInteger);
} else {
    console.log("The larger integer is: " + secondInteger);
}

// Q # 3 : Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.


var number = prompt("Enter a number:");

if (number > 0) {
    console.log("The number is positive.");
} else if (number < 0) {
    console.log("The number is negative.");
} else {
    console.log("The number is zero.");
}

// Q # 4 : Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise


var character = prompt("Enter a character:");
var vowelCharacter = character.toLowerCase();
if (
    vowelCharacter === "a" ||
    vowelCharacter === "e" ||
    vowelCharacter === "i" ||
    vowelCharacter === "o" ||
    vowelCharacter === "u"
) {
    console.log("The character is a vowel. Result: true");
} else {
    console.log("The character is not a vowel. Result: false");
}



// Q # 5 : Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.



var correctPassword = "Usama123";
var enteredPassword = prompt("Enter your password:");

if (!enteredPassword) {
    console.log("Please enter your password.");
} else if (enteredPassword === correctPassword) {
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}





//Q # 6  . Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


var time = prompt("Enter the time in the 24-hour clock format:");

if (time >= 0 && time <= 2359) {

    var hour = Math.floor(time / 100);
    var minute = time % 100;
    var period;


    if (hour >= 0 && hour < 12) {
        period = "AM";
    } else {
        period = "PM";
    }

    if (hour === 0) {
        hour = 12;
    } else if (hour > 12) {
        hour = hour - 12;
    }


    console.log("The time in 12-hour clock format is: " + hour + ":" + minute + " " + period);
} else {
    console.log("Invalid time input.");


}