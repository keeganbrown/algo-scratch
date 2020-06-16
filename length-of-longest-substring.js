// https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/

var lengthOfLongestSubstring = function (s) {
  let longestSubstring = '';
  let lastSubstring = '';

  s.split('').forEach((char, index) => {
    console.log({ longestSubstring, lastSubstring, char });

    if (!lastSubstring.includes(char)) {
      lastSubstring = lastSubstring + char;
      if (lastSubstring.length > longestSubstring.length) {
        longestSubstring = lastSubstring;
      }
      return;
    }

    lastSubstring =
      lastSubstring.substr(
        lastSubstring.indexOf(char) + 1,
        lastSubstring.length
      ) + char;
  });

  console.log(longestSubstring);

  return longestSubstring.length;
};

function test() {
  const str = 'dvdf';
  lengthOfLongestSubstring(str);
}

test();
