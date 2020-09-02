/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let l = A.length;
    
    const ans = new Array(l)
    let i = 0;
    let j = l - 1;
    while(i <= j){
        if(A[i]*A[i] > A[j]*A[j]){
            ans[--l] = A[i] * A[i];
            i++;
        }
        if(A[i]*A[i] <= A[j]*A[j]){
            ans[--l] = A[j] * A[j];
            j--;
        }
    }
    
    
    return ans;
};


/**
 * merge sort 的概念 兩個指標分別從arr前後比較 平方後的大小 依序塞進陣列
 */
