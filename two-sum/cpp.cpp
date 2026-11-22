class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        
        vector<int> indicats = {};
        bool is_completed = false;

        for( int i =0; i <std::size(nums); i++ ) {

            if( is_completed == true) {
                break;
            }

            for( int x =0; x <std::size(nums); x++ ) {
                if( x != i && (nums[i] + nums[x]) == target ) {
                    indicats.push_back(i);
                    indicats.push_back(x);
                    is_completed = true;
                    break;
                }
            }
        }

        return indicats;
    }
};