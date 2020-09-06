/**
 * @param {string} S
 * @return {number}
 */
var minAddToMakeValid = function(S) {
    var A = 0, B = 0;
    for(var i = 0; i < S.length; i++){
        if(S[i] === '('){
            A++;
        }else if(S[i] === ')' && A > 0){
            A--;
        }
        else{
            B++
        }
    }
    
    return A + B;
};
