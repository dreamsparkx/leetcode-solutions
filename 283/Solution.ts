function moveZeroes(nums: number[]): void {
    let count = 0;  // Count of non-zero elements
    // Traverse the array. If element encountered is non-
    // zero, then replace the element at index 'count'
    // with this element
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            nums[count++] = nums[i];
        }
    }
    // Now all non-zero elements have been shifted to
    // front and 'count' is set as index of first 0.
    // Make all elements 0 from count to end.
    while(count < nums.length) {
        nums[count++] = 0;
    }
};