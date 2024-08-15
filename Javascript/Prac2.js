// P1
let SBC = [50, 20, 40, 22, 39, 23, 35, 25, 30, 27];
let BS = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
let BP = [40, 41, 37, 43, 44, 45, 46, 33, 48, 49];
// Hàm tính số lượng tuổi bị trùng lặp:
function sameAge(array1, array2) {
  let count = 0;
  for (let i = 0; i < array1.length; i++)
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) count++;
    }
  return count;
}
// Vì các mảng là unique nên với 1 tuổi nhất định, nếu có trùng thì chỉ trùng duy nhất 1 lần (tức là có tối đa 2 người trùng tuổi nhau với 1 độ tuổi)
// => số người trùng tuổi = số lượng tuổi bị trùng * 2
console.log(
  "Số người trùng tuổi nhau giữa 2 bộ phận BS và BP:",
  sameAge(BS, BP) * 2,
  "người"
); // 2 người 33 tuổi, 2 người 37 tuổi => 4 người
console.log(
  "Số người trùng tuổi nhau giữa 2 bộ phận SBC và BS:",
  sameAge(SBC, BS) * 2,
  "người"
); // 2 người 30 tuổi, 2 người 35 tuổi, 2 người 39 tuổi => 6 người
console.log(
  "Số người trùng tuổi nhau giữa 2 bộ phận SBC và BP:",
  sameAge(SBC, BP) * 2,
  "người"
); // 2 người 40 tuổi => 2 người
