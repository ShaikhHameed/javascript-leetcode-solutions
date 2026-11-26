/**
 * @param {string} s
 * @return {number}
 */

const rMap = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
} // creating a Map 

var romanToInt = function (s) {
    let total =0;
    for(let i=0; i<s.length; i++){
        let current = rMap[s[i]];
        let next = rMap[s[i+1]];
        if(current<next){
            total-=current;
        }else{
            total+=current;
        }
    }
    return total;
};