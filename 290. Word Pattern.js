const pattern = "abc",
  str = "b c a";

var wordPattern = function (pattern, str) {
  const temp = {};
  const strArr = str.split(" ");

  if (pattern.length !== strArr.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    if (temp[pattern[i]] === undefined) {
      temp[pattern[i]] = i;
    }
    if (temp[`S_${strArr[i]}`] === undefined) {
      temp[`S_${strArr[i]}`] = i;
    }
    if (temp[pattern[i]] !== temp[`S_${strArr[i]}`]) {
      return false;
    }
  }
  return true;
};

console.log(wordPattern(pattern, str));
