//! 后序遍历


//# 如果左节点不为空，且左节点没有左右孩子，那么这个节点的左节点就是左叶子
//# 判断当前节点是不是左叶子是无法判断的，必须要通过节点的父节点来判断其左孩子是不是左叶子。

/*
 * 1. 确定递归函数的参数和返回值
 * 判断一个树的左叶子节点之和，那么一定要传入树的根节点，递归函数的返回值为数值之和，所以为int
 *
 * 2. 确定终止条件
 * 依然是 "if (root == NULL) return 0;"
 *
 * 3. 确定单层递归的逻辑
 * 当遇到左叶子节点的时候，记录数值，然后通过递归求取左子树左叶子之和，和 右子树左叶子之和，相加便是整个树的左叶子之和。
 */

var sumOfLeftLeaves = function (root) {
    if (root === null) return 0;

    let leftSum = sumOfLeftLeaves(root.left);
    let rightSum = sumOfLeftLeaves(root.right);
    let sum = leftSum + rightSum;
    // 判断当前节点是否有左叶子节点
    if (
        root.left !== null &&
        root.left.left === null &&
        root.left.right === null
    )
        sum += root.left.val;

    return sum;
};
