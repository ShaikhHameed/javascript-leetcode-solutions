/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reversed = 0; // final output. Initialized as 0
    let n = Math.abs(x); // negative integers if any to positive
    const isNegative = x<0; // check if input was negative Integer
    while(n>0){
        let lastDigit = Math.floor(n%10); // selects the last digit the of integer (eg: 1553 -> outputs 3)
        reversed = (reversed*10)+lastDigit; // adds last digit to the current digit.(0+3->3, (3*10)+5,35 and so on...)
        n = Math.floor(n/10);  // removes last digits from n which will evantually become zero
    }
    return isNegative? -reversed: reversed; // return negative value if input was negative
};