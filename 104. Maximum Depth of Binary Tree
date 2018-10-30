/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root, max = 0) {
    
    let DPS = (root, dep) => {      
        if(root != null){
            if((dep+1) > max)
                max = dep+1;
            
            DPS(root.left, dep+1)
            DPS(root.right, dep+1)
        }
    }
    DPS(root, 0)
    return max
};
