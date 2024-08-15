let SBC = [50, 20, 40, 22, 39, 23, 35, 25, 30, 28];
let BS = [30, 31, 32, 33, 34, 35, 36, 37, 38, 39];
let BP = [40, 41, 37, 43, 44, 45, 46, 33, 48, 49];

let result = [];
for (let i = 0; i < SBC.length; i++) {
  result.push([BP[i], BS[i], SBC[i]]);
}

console.log(result);
