/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

 // Running  i j Loop and comparing the next items with j loops get the combination fast and easy
var twoSum = function(nums, target) {
    for(let i=0; i<nums.length;i++){
        for(let j = i+1; j<nums.length;j++){
            if(nums[i] + nums[j] === target){
                return [i,j];
            }
        }
    }
    return false;
};