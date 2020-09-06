/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  return search(root, val);
};

function search(root, val) {
  if (root === null) {
    return null;
  }
  if (root.val === val) {
    return root;
  }
  if (root.val < val) {
    return search(root.right, val);
  }
  if (root.val > val) {
    return search(root.left, val);
  }
}
