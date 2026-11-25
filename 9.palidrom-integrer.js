
// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    return x == x.toString().split("").reverse().join(""); // Like.. Self explanatory
};

// Without JS Array Functions 
var isPalindrome = function(x) {
    let num = Math.abs(x);
    let reversed = 0; // simple interger reverse technique
    while(num>0){
        const lastDigit = Math.floor(num%10);
        reversed = (reversed*10)+lastDigit;
        num = Math.floor(num/10);
    }
    return x === reversed;
}

