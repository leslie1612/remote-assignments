// count: return an object which shows the count of each character.
function count(input) {
  let obj = {};
  input.forEach((char) => {
    if (obj.hasOwnProperty(char)) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  });
  return obj;
}

let input1 = ["a", "b", "c", "a", "c", "a", "x"];
console.log(count(input1)); // should print {a:3, b:1, c:2, x:1}

// groupByKey: return an object which shows the summed-up value of each key.
function groupByKey(input) {
  let newObj = {};
  input.forEach((obj) => {
    if (newObj.hasOwnProperty(obj["key"])) {
      newObj[obj["key"]] += obj["value"];
    } else {
      newObj[obj["key"]] = obj["value"];
    }
  });
  return newObj;
}
let input2 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log(groupByKey(input2)); // should print {a:6, b:1, c:7}
