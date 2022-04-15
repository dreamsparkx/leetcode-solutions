function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) {
        return false;
    }
    let s1Arr: number[] = Array(26).fill(0);
    let s2Arr: number[] = Array(26).fill(0);
    let len: number = s1.length;
    for(let i=0; i<len; i++){
        s1Arr[s1[i].charCodeAt(0)-"a".charCodeAt(0)]++;
        s2Arr[s2[i].charCodeAt(0)-"a".charCodeAt(0)]++;
    }
    if(isAnagram(s1Arr, s2Arr)) return true;
    for(let i=1; i<=s2.length-s1.length; i++){
        s2Arr[s2[i-1].charCodeAt(0)-"a".charCodeAt(0)]--;
        s2Arr[s2[i+len-1].charCodeAt(0)-"a".charCodeAt(0)]++;
        if(isAnagram(s2Arr, s1Arr)) return true;
    }
    return false;
};

function isAnagram(arr, arr2){
    for(let i=0; i<26; i++){
        if(arr[i] != arr2[i]) return false;
    }
    return true;
}