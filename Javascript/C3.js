function minSteps(word1, word2) {
    let m = word1.length;
    let n = word2.length;

    // Tạo bảng DP để lưu trữ kết quả của các phép tính
    let dp = Array(m + 1).fill().map(() => Array(n + 1).fill(0));

    // Điền vào bảng DP
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j; // Cần j bước để chuyển từ chuỗi rỗng sang word2
            } else if (j === 0) {
                dp[i][j] = i; // Cần i bước để xóa hết ký tự trong word1
            } else if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1]; // Nếu ký tự giống nhau, không cần bước nào
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], // Thay đổi ký tự
                                        Math.min(dp[i - 1][j],    // Xóa ký tự
                                                 dp[i][j - 1]));  // Thêm ký tự
            }
        }
    }

    return dp[m][n];
}

// let word1 = "Pham Van Quyen";
// let word2 = "Tran Duc Nam";

let word1 = "sun";
let word2 = "sing";

let steps = minSteps(word1, word2);
console.log("Số bước tối thiểu: " + steps + " bước.");
