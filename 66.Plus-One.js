/* You are given a large integer represented as an integer array digits, 
where each digits[i] is the ith digit of the integer. 
The digits are ordered from most significant to least significant in left-to-right order. 
The large integer does not contain any leading 0's.
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    // select form last to first element of the array
    for(let i=digits.length-1; i>=0;i--){
        if(digits[i]<9){
            digits++; 
            return digits // increment the current item if less than 9 and return array;
        }
        digits[i] =0 
        // if the number is 9 so the result will probably be 10 so set 
        // this as 0 and next interated number will be incremented by 1
    }

    digits.unshift(1) // if all the numbers have been updated to zero, then we need to place 1 as the first item of the result array.
    return digits;
}
