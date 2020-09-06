/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    var roman = [], romanstring = "";
    roman[1] = 'I', roman[5] = 'V', roman[10] = 'X', roman[50] = 'L', roman[100] = 'C', roman[500] = 'D', roman[1000] = 'M';
    roman[4] = 'IV', roman[9] = 'IX', roman[40] = 'XL', roman[90] = 'XC', roman[400] = 'CD', roman[900] = 'CM';
    var number = [1000, 900, 500, 400, 100, 90, 50, 40, 10 ,9 ,5 ,4 ,1]
    var val = 0, result = ""
    while(num > 0){ 
        var index = number[val]
        var count = Math.floor(num / index)
        for(var i = 0; i < count; i++){
            result += roman[index]
        }
        
        val++
        num = num - index * count
    }
    
    return result
    
};
