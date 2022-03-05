/*You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.
*/

const orangesRotting = function(grid) {
    // Base: if 1 is found horizontally, vertically of 2, 
      // iterate the for loop, if not return output (number of iteration)
  let counter = 0;

    // Check if 1 is next to 2:
      // Horizontal: if 2 is found, check index-1 & index+1 is 1 of that array.
        // if so, 1 becomes 2.
      // Vertical: if 2 is found, check same indexed element in previous & next arrays.
        // if 1 is found, 1 becomes 2.

  for (let idx = 0; idx < grid.length; idx++) { // idx = array
    for (let h = 0; h < grid[idx].length; h++) { // h = el of array
      if (grid[idx][h] === 2) {
        
      }
    }
  }
};