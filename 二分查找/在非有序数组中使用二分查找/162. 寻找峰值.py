class Solution:
    def findPeakElement(self, nums):
        """ 
        ? 图解: https://leetcode.cn/problems/find-peak-element/solution/er-fen-cha-zhao-zui-jian-jie-yi-dong-de-cvn1f/
        关键是我们的二分方向，并不知道山峰在我们左边还是右边，送你两个字你就明白了，爬山，如果你往下坡方向走，也许可能遇到新的山峰，但是也许是一个一直下降的坡，最后到边界。但是如果你往上坡方向走，就算最后一直上的边界，由于边界是负无穷，所以就一定能找到山峰，总的一句话，往递增的方向上，二分，一定能找到，往递减的方向只是可能找到，也许没有。
        
        * 我们使用二分来做, 每次找出区间的中点mid, 比较 nums[mid] 与 nums[mid + 1] 的大小关系不断缩小区间范围, 因为题目中说 nums[i] != nums[i + 1], 所以可以进行有效的判断. 根据排除法, "nums[mid] < nums[mid + 1]" 
        * mid 及其左边一定不存在峰值, 缩小搜索区间为 [mid + 1, right]
        """
        left = 0
        right = len(nums) - 1
        
        while left < right:
            mid = (left + right) // 2
            
            if nums[mid] < nums[mid + 1]:
                #* 下一轮搜索区间 [mid + 1, right]
                left = mid + 1
            else:
                #* 下一轮搜索区间 [left, mid]
                right = mid
        return left

Solution().findPeakElement(nums = [1,2,3,1])


""" 
 0 1 2 3 4 5 6
[1,2,1,3,5,6,4]
mid = 3
"""
