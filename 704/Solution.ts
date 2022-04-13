function search(nums: number[], target: number): number {
    let l: number = 0;
    let r: number = nums.length - 1;
    let mid: number;
    while(r >= l) {
        mid = l + Math.floor((r-l)/2);
        if (nums[mid] === target) {
            return mid;
        }
        if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return -1;
};
