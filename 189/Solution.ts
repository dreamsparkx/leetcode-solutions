function rotate(nums: number[], k: number): void {
    k = k % nums.length;    // get remainder
    const rev = (l = 0, r = nums.length - 1) => {
        while (l < r) {
            [nums[l], nums[r]] = [nums[r], nums[l]];
            l++, r--;
        }
    };
    rev();
    rev(0, k-1);
    rev(k);
};