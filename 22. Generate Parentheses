/**
 * @param {number} n
 * @return {string[]}
 */


var generateParenthesis = function(n) {
    let front = n - 1 , end = n;
    let result = '('
    let array = []
    generate(front, end, result)
    
    function generate(front, end, result){
    
    if(end == 0){
        array.push(result)
    }else if(front < end){
        if(front > 0)
            generate(front-1, end, result+'(')
        generate(front, end-1, result+')')
    }else if(front == end){
        generate(front-1, end, result+'(')     
    }
    
    }
    return array
};
