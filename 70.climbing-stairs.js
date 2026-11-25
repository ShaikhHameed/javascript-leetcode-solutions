/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const sequence =[];
    sequence[0]= 1
    sequence[1]= 1
    // default steps for stair(1)

    // start the loop from second stair onwards
    for(let i=2; i<=n;i++){
        sequence[i] = (sequence[i-1]+sequence[i-2]) 
        // sum from previous two steps. 
        // If sepes are 3, them total number of steps from step 1 and step 2 will be added. 
    }
    return sequence[n] // return the last item from sequence

}