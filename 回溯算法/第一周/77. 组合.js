var combine = function (n, k) {
    let totalPaths = [];
    let currentPath = [];

    let combineHelper = function (n, k, startIdx) {
        if (currentPath.length === k) {
            totalPaths.push([...currentPath]);
            return;
        }
        for (let i = startIdx; i <= n; i++) {
            currentPath.push(i);
            // ! 注意这里是 i + 1 而不是 startIdx + 1, 后者会出现[2,2]的情况
            combineHelper(n, k, i + 1);
            currentPath.pop();
        }
    };
    combineHelper(n, k, 1);
    return totalPaths;
};
combine(4, 2);
