function lengthOfLongestSubstring(s: string): number {
    if (!s) {
        return 0;
    }
    let start: number = 0, end: number = 0, result: number = 0;
    const uniqueCharacters = new Set();
    while (end < s.length) {
        if (!uniqueCharacters.has(s[end])) {    // new char
            uniqueCharacters.add(s[end]);
            end++;
            result = Math.max(result, uniqueCharacters.size);
        } else {
            uniqueCharacters.delete(s[start]);
            start++;
        }
    }
    return result;
};