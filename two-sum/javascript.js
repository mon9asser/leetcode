/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var returned = [];
    var completed = false;

    nums.forEach(function(k1, v1) {
        if (completed) return;

        nums.forEach(function(v2, k2) {
            if (completed) return;

            if (v1 !== k2 && (k1 + v2) === target) {
                returned.push(v1);
                returned.push(k2);
                completed = true;
            }
        });
    });

    return returned;
};