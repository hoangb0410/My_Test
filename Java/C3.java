public class C3 {
    public static void main(String[] args) {
//        String word1 = "Pham Van Quyen";
//        String word2 = "Tran Duc Nam";
        String word1 = "sun";
        String word2 = "sing";
        int steps = minSteps(word1, word2);
        System.out.println("Số bước tối thiểu để chuyển từ \"" + word1 + "\" sang \"" + word2 + "\": " + steps + " bước.");
    }
    public static int minSteps(String word1, String word2) {
        int m = word1.length();
        int n = word2.length();
        // Tạo bảng DP để lưu trữ kết quả của các phép tính
        int[][] dp = new int[m + 1][n + 1];
        // Điền vào bảng DP
        for (int i = 0; i <= m; i++) {
            for (int j = 0; j <= n; j++) {
                if (i == 0) {
                    dp[i][j] = j; // Cần j bước để chuyển từ chuỗi rỗng sang word2
                } else if (j == 0) {
                    dp[i][j] = i; // Cần i bước để xóa hết ký tự trong word1
                } else if (word1.charAt(i - 1) == word2.charAt(j - 1)) {
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
}
