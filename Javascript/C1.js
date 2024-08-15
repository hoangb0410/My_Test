let age = [20, 23, 25, 50, 39, 28, 40, 22, 30, 35];
// Hàm sắp xếp tuổi lớn nhất cạnh nhỏ nhất, lớn nhì cạnh nhỏ nhì,...
function specialSort(array) {
  // sắp xếp mảng tăng dần
  // array.sort((a, b) => a - b);
  array = bubbleSort(array);
  // Chia mảng thành 2 phần bên trái là các phần tử nhỏ nhất, bên phải là các phần tử lớn nhất
  let left = 0;
  let right = array.length - 1;
  let result = [];
  // Kết hợp 2 phần
  while (left <= right) {
    if (left === right) {
      result.push(array[left]);
    } else {
      result.push(array[right]);
      result.push(array[left]);
    }
    left++;
    right--;
  }
  return result;
}
let result = specialSort(age);
console.log(result);

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              let temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  return arr;
}