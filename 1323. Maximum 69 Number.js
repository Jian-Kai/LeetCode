/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const str = String(num);
  let increase = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "6") {
      increase = 3 * Math.pow(10, str.length - 1 - i);
      break;
    }
  }
  return num + increase;
};

console.log(maximum69Number(9999));
