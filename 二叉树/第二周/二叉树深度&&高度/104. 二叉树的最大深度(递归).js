/* 
> 使用前序求的就是深度，使用后序求的是高度。
> 而根节点的高度就是二叉树的最大深度，所以本题中我们通过后序求的根节点高度来求的二叉树最大深度。



! 用后序遍历（左右中）来计算树的高度。
* 1. 确定递归函数的参数和返回值：参数就是传入树的根节点，返回就返回这棵树的深度，所以返回值为int类型。
* 2. 确定终止条件：如果为空节点的话，就返回0，表示高度为0。
* 3. 确定单层递归的逻辑：先求它的左子树的深度，再求的右子树的深度，最后取左右深度最大的数值 再+1 （加1是因为算上当前中间节点）就是目前节点为根节点的树的深度。 
*/

var maxDepth = function (root) {
    if (root === null) return 0;

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};
