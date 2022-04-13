var solution = function(isBadVersion: any) {
    return function(n: number): number {
        let left = 1, right = n;
        while (right > left) {
            const mid = left + Math.floor((right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};