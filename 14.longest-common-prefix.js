/*
Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".
*/ 

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(!strs || strs.length===0) return "";

    for(let i=0; i<strs[0].length;i++){
        const char = strs[0][i]; // get each character from first item

        // Now we will compare current character to the same position of other words. 
        // eg. second character to the second character of other strings in array. 
        for(let j =1; j<strs.length;j++){
            if(i===strs[j].length || char !== strs[j][i]){
                return strs[0].slice(0,i); // If theres a mismatch in length of strings or current character. it will return the slice value from first string.
            }
        }
    }
    return strs[0]; // If there was no mismatch at all.

};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["a"]));
console.log(longestCommonPrefix(["flower","flower","flower","flowering"]));
// test cases
// strs = ["flower","flow","flight"] => 'fl'
// strs = ["dog","racecar","car"] => ''
// 