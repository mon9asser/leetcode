class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        
        indexes = []
        for k1, num1 in enumerate(nums):
            found = False
            for k2, num2 in enumerate(nums):
                if k1 != k2 and (num1 + num2) == target:
                    indexes.append(k1)
                    indexes.append(k2)
                    found = True
                    break
            if found:
                break 
            
        return indexes