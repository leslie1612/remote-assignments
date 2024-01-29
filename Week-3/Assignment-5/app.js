function twoSum(nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;

    // 如果obj中有符合的"數值"，則返回[數值的index, 目前的index]
    if (obj[num2] >= 0) {
      return [obj[num2], i];
    }

    // 把找過的數字以{ "數值" : index }儲存在obj中
    obj[num1] = i;
  }
  // 若都沒有，返回空陣列
  return [];
}
console.log(twoSum([2, 5, 3], 6));
/*
For example:
twoSum([2, 7, 11, 15], 9); Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/
