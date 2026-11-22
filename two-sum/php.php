<?php 

class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) { 
        
        $indicats = [];

        foreach($nums as $k1 => $v1) {
            foreach($nums as $k2 => $v2) {
                if( $k1 != $k2 && ($v1 + $v2 ) == $target ) {
                    array_push($indicats, $k1, $k2);
                    break 2;
                }
            }
        }

        return $indicats;
    }
}