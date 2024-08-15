var age = [20, 23, 25, 50, 39, 28, 40, 22, 30, 35];
// Sắp xếp mảng tăng dần
age.sort((a, b) => a - b);
// Chia mảng thành 2 phần bên trái là các phần tử nhỏ nhất, bên phải là các phần tử lớn nhất
let left = 0;
let right = age.length - 1;
let result = [];
// Kết hợp 2 phần
while (left <= right) {
  if (left === right) {
    result.push(age[left]);
  } else {
    result.push(age[right]);
    result.push(age[left]);
  }
  left++;
  right--;
}

console.log(result);

// let age = [17, 20, 23, 18, 25, 50, 39, 55, 8, 28, 40, 22, 90, 19, 18];

// // Loại bỏ những tuổi không hợp lệ (<20, >50)
// for (var i = 0; i < age.length; i++) {
//   if (age[i] < 20 || age[i] > 50) {
//     age.splice(i, 1);
//   }
// }
// console.log(age);

// function remove duplicate
// function removeDuplicates(array) {
//   let unique = [];
//   array.forEach((item) => {
//     if (!unique.includes(item)) {
//       unique.push(item);
//     }
//   });
//   return unique;
// }
// test1 = [2, 4, 3, 7, 0, 0, 1, 4, 9, 6, 9, 5];
// test1result = removeDuplicates(test1);
// console.log(test1result);