/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    let arrMap = {},targetMap={};
    for(let i=0;i<arr.length;i++){
        if(!arrMap[arr[i]]){
            arrMap[arr[i]]=1 
        }else{
            arrMap[arr[i]]++;
        }
        
        if(!targetMap[target[i]]){
            targetMap[target[i]]=1
        }else{
            targetMap[target[i]]++;
        }
      
    }
    
    for(let key in arrMap){
        if(!targetMap[key] || targetMap[key]!==arrMap[key])
            return false;
    }
    return true
};
