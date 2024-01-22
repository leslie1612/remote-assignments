// Assignment 5: Algorithm Practice
// Binary Search

function binarySearchPosition(numbers, target) {
  // 設定左右兩邊邊界
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    // 取得兩邊界的中心點（無條件捨去）
    let mid = Math.floor((left + right) / 2);

    if (numbers[mid] < target) {
      left = mid + 1; // 當中心點的數值比目標小，則左邊邊界往中心點右移一格
    } else if (numbers[mid] > target) {
      right = mid - 1; // 當中心點的數值比目標大，則右邊邊界往中心點左移一格
    } else {
      return mid; // 當中心點的數值就是目標，表示找到了，回傳中心點
    }
  }
  return -1;
}
console.log(binarySearchPosition([1, 2, 5, 6, 7], 1)); // should print 0
console.log(binarySearchPosition([1, 2, 5, 6, 7], 6)); // should print 3
