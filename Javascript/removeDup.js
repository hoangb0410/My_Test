function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

let array = [1, 1, 0, 2, 2, 3, 4, 4, 5, 5];
let uniqueArray = removeDuplicates(array);
console.log(uniqueArray); // Output: [1, 2, 3, 4, 5]
