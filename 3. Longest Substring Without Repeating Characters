/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var i = 1, table = [], temp = [], maxlength = 1;
    var start = 0;
    table[0] = [0, 0];
    temp[s[0]] = 0;
    if(s.length == 0) return 0
    while(i < s.length){
        if(!temp[s[i]] && temp[s[i]] != 0){
            
            table[i] = [start, i]
            temp[s[i]] = i
        }else{
            var index = temp[s[i]]
            if(table[index][1]+1 > start)            
                start = table[index][1]+1;
            table[i] = [start, i]
            temp[s[i]] = i
        }
        if(table[i][1] - table[i][0] + 1 > maxlength){
            maxlength = table[i][1] - table[i][0] + 1;
            
        }
        i++
    }
    return maxlength
};
