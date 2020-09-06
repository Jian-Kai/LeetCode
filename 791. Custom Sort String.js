/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function(S, T) {
    var map = [], temp = ''
    
    for(var i = 0; i < S.length; i++){
        map[S[i]] = {
            'x': false,
            'time': 0
        }
    }
    
    for(var i = 0; i < T.length; i++){
        if(!map[T[i]])
            temp += T[i]
        else{
            map[T[i]].x = true
            map[T[i]].time++
        }
    }
    
    for(var i = 0; i < S.length; i++){
        if(map[S[i]].x){
            for(var j = 0; j < map[S[i]].time; j++)
                temp += S[i]
        }
    }
    
    return temp
};
