/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var res = 0;
    
    while(x != 0 || y != 0){
        
        res+= Math.abs((x%2) - (y%2))
        x = Math.floor(x/2)
        y = Math.floor(y/2)
    }
    
    return res
};
