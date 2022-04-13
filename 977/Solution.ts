function sortedSquares(nums: number[]): number[] {
    const result = Array(nums.length);
    let l = 0, r = nums.length - 1;
    let index = r;
    while(l <= r) {
        if (Math.abs(nums[l]) < Math.abs(nums[r])) {
            result[index--] = nums[r] * nums[r];
            r--;
        } else {
            result[index--] = nums[l] * nums[l];
            l++;
        }
    }
    return result;
};