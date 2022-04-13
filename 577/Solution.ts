function reverseWords(s: string): string {
    const words = split(s);
    const result: string[] = [];
    for (let i = 0; i < words.length; i++) {
        result.push(reverse(words[i]));
    }
    return result.join(" ");
  };
  
  function split(s: string): string[] {
    let words: string[] = [];
    let word: string = "";
    for (let i = 0; i < s.length; i++) {
        if (s[i] == ' ') {
            words.push(word);
            word = "";
        } else {
            word = word + s[i];
        }
    }
    words.push(word);
    return words;
  }
  
  function reverse(word: string): string {
    let left: number = 0, right: number = word.length - 1;
    while (left < right) {
        let tempRight = word[right];
        word = word.substring(0, right) + word[left] + word.substring(right + 1);
        word = word.substring(0, left) + tempRight + word.substring(left + 1);
        left++;
        right--;
    }
    return word;
  }