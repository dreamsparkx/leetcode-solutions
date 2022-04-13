function twoSum(numbers: number[], target: number): number[] {
    let left = 0, right = numbers.length - 1;
    const result: number[] = Array(2);
    while (left < right) {
        let temp = numbers[left] + numbers[right];
        if (temp == target) {
            result[0] = left + 1;
            result[1] = right + 1;
            break;
        }
        if (temp > target) {
            right--;
        } else {
            left++;
        }
    }
    return result;
};