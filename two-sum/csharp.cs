public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        
        List<int> indicats = new List<int>();
        bool itsDone = false;
        for(int x=0; x<nums.Count(); x++) {
            if( itsDone) {
                break;
            }
            for(int y=0; y<nums.Count(); y++) {
                if( x != y && (nums[x] + nums[y]) == target) {
                    indicats.Add(x);
                    indicats.Add(y);
                    itsDone = true;
                    break;
                }
            }
        }

        return indicats.ToArray();

    }
}