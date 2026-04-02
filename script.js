function toRoman(num) {
  if (num <= 0) return "";

  const romanMap = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];

  let result = "";

  for (let [symbol, value] of romanMap) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
}

function convert() {
  const input = document.getElementById("number").value;
  const output = document.getElementById("output");

  const num = parseInt(input);

  if (isNaN(num) || num < 0) {
    output.textContent = "Please enter a valid number (>= 0)";
    return;
  }

  output.textContent = toRoman(num);
}
// do not edit below this line
module.exports = convertToRoman
