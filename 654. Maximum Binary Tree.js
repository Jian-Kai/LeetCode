/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    var Treearray = []
    var Maxtree = findmax(nums)
    return Maxtree;
};

var findmax = (arr) => {
    var max = Number.MIN_SAFE_INTEGER;
    var index = -1;
    var left = [], right = [];
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
            index = i;
        }
    }
    left = arr.slice(0, index)
    right = arr.slice(index+1, arr.length)
    
    var Node = new TreeNode(max)
    
    if(left.length > 0){
        Node.left = findmax(left)
    }
    
    if(right.length > 0){
        Node.right = findmax(right)
    }
    
    
    return Node
}
