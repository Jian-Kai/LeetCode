/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    var max_top = new Array(grid.length).fill(0), max_left = [];
    var keep = 0;
    for(var i = 0; i < grid.length; i++){
        max_left.push(Math.max(...grid[i]))
        for(var j = 0; j < grid.length; j++){
            if(grid[j][i] > max_top[i])
                max_top[i] = grid[j][i]
        }
    }
    for(var i = 0; i < grid.length; i++){
        for(var j = 0; j < grid.length; j++){
            keep += Math.min(max_left[i], max_top[j]) - grid[i][j]
        }
    }
        
  
    return keep
};
