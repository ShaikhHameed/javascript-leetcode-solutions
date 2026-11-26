/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/
/**
 * @param {string} s
 * @return {boolean}
 */

const pairs ={
    "{":"}",
    "[":"]",
    "(":")"
}


var isValid = function(s) {
    if(s.length%2!==0) return false; // If total lenth is odd then no need to process its invalid by default.
    const stack=[]; // stack to store parenthesis that need to be closed
    for(const l of s){
        // If there is key for current item in pairs the its is opening parenthesis
        if(pairs[l]){
            stack.push(pairs[l]); // store the required closing parenthis in the array.
        }else{
            // pop from the array 
            // current element should be equal to the last pushed value to the stack. if it isnt, it means the order is invalid.
            if(stack.pop()!==l){
                return false;
            }
        }
    }
    if(stack.length>0) return false; // If there ar left over value in stack. the string is probably invalid
    return true;
};


// Test Cases
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
console.log(isValid("([])"));
console.log(isValid("([)]"));
console.log(isValid("([{}])"));
console.log(isValid("([{})"));
console.log(isValid("(("));
console.log(isValid("))"));
console.log(isValid("}}{{"));
console.log(isValid("{{}}"));