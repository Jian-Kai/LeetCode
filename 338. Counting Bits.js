/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var bits = [0, 1];
    var twolength = Math.floor(num / 2)
    for(var i = 1; i <= twolength; i++){
        
        var index = Math.floor(i / 2), plus = i % 2;
        bits.push(bits[index * 2] + plus)
        bits.push(bits[index * 2 + 1] + plus)
    }
    
    if(num % 2 == 1)
        return bits
    return bits.slice(0, bits.length-1)
};
