function twoSum(nums: number[], target: number): number[] {
    let indicats: number[] = [];
    let finished = false; 

    nums.forEach((v1, k1) => {
        if (finished) return;

        nums.forEach((v2, k2) => {
            if (finished) return;

            if (k1 !== k2 && (v1 + v2) === target) {
                indicats.push(k1, k2);
                finished = true;
            }
        });
    });

    console.log(indicats);
    return indicats;
}
