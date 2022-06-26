//? https://leetcode.cn/problems/same-tree/solution/acm-xuan-shou-tu-jie-leetcode-xiang-tong-fa6e/
var isSameTree = function (p, q) {
    if (p === null && q === null) return true;
    else if (p !== null && q === null) return false;
    else if (p === null && q !== null) return false;

    if (p.val !== q.val) return false; //* 中

    let leftCheck = isSameTree(p.left, q.left); //* 左
    let rightCheck = isSameTree(p.right, q.right); //* 右
    return leftCheck && rightCheck;
};
