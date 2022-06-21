var lowestCommonAncestor = function (root, p, q) {
    if (root === null) return null;

    // 如果 p.val 和 q.val 都比 root.val 小，则p、q肯定在 root 的左子树。递归左子树就行！
    if (root.val > p.val && root.val > q.val) {
        let leftResult = lowestCommonAncestor(root.left, p, q);
        if (leftResult !== null) return leftResult;
    }
    // 如果 p.val 和 q.val 都比 root.val 大，则p、q肯定在 root 的右子树。递归右子树就行！
    if (root.val < p.val && root.val < q.val) {
        let rightResult = lowestCommonAncestor(root.right, p, q);
        if (rightResult !== null) return rightResult;
    }
    // 只要 p.val 和 q.val 不是都大于(小于) root.val，即只要 p, q 不同处在 root 的一个子树，root 即为所求！
    return root;
};
