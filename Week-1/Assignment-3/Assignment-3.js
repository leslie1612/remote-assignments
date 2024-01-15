// countAandB: count how many ‘a’ and ‘b’ letters are in the given input and return the total number.
function countAandB(input) {
  // your code here
  let count = 0;
  input.forEach((i) => {
    if (i == "a" || i == "b") {
      count++;
    }
  });
  return count;
}

// toNumber: convert English letters to numbers, let ‘a’ to be 1, ‘b’ to be 2, and so on.
function toNumber(input) {
  // your code here
  return input.map((i) => {
    switch (i) {
      case "a":
        return 1;
      case "b":
        return 2;
      case "c":
        return 3;
      case "d":
        return 4;
      case "e":
        return 5;
    }
  });
}

let input1 = ["a", "b", "c", "a", "c", "a", "c"];
console.log(countAandB(input1)); // should print 4 (3 ‘a’ letters and 1 ‘b’ letter)
console.log(toNumber(input1)); // should print [1, 2, 3, 1, 3, 1, 3]
let input2 = ["e", "d", "c", "d", "e"];
console.log(countAandB(input2)); // should print 0
console.log(toNumber(input2)); // should print [5, 4, 3, 4, 5]