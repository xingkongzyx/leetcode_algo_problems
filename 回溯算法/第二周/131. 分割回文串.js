var partition = function (s) {
    let currentPath = [];
    let totalPath = [];
    function backtracking(s, startIdx) {
        
        if (startIdx === s.length) {
            totalPath.push(currentPath.slice());
            return;
        }

        for (let i = startIdx; i < s.length; i++) {
            if (checkPalindrome(s, startIdx, i)) {
                currentPath.push(s.substring(startIdx, i + 1));
            } else {
                continue;
            }

            backtracking(s, i + 1);
            currentPath.pop();
        }
    }

    backtracking(s, 0);
    // console.log(totalPath);
    return totalPath;
};

function checkPalindrome(str, startIdx, endIdx) {
    while (startIdx < endIdx) {
        if (str[startIdx] !== str[endIdx]) {
            return false;
        }
        startIdx++;
        endIdx--;
    }
    return true;
}

const s = "aab";
partition(s);
