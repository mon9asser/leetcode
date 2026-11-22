class Solution {
  List<int> twoSum(List<int> nums, int target) {
    
        List<int> indicats = [];
        bool isItDone = false;

        for(int x=0; x < nums.length; x++) {
            
            if( isItDone ) {
                break;
            }

            for(int y=0; y < nums.length; y++) { 
                if(y != x && (nums[x] + nums[y]) == target) {
                    indicats.addAll([x, y]);
                    isItDone = true; 
                    break;
                }
            }
            

        }
        print(indicats);
        return indicats;
  }
}