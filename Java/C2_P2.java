public class C2_P2 {
    public static void main(String[] args) {
        int[] SBC = {50, 20, 40, 22, 39, 23, 35, 25, 30, 28};
        int[] BS = {30, 31, 32, 33, 34, 35, 36, 37, 38, 39};
        int[] BP = {40, 41, 37, 43, 44, 45, 46, 33, 48, 49};

        // Khởi tạo mảng 2 chiều với số hàng bằng độ dài của các mảng và số cột là 3
        int[][] result = new int[SBC.length][3];

        // Sử dụng mảng 2 chiều
        for (int i = 0; i < SBC.length; i++) {
            result[i][0] = BP[i];
            result[i][1] = BS[i];
            result[i][2] = SBC[i];
        }

        // Hiển thị kết quả
        for (int i = 0; i < result.length; i++) {
            System.out.print("[");
            for (int j = 0; j < result[i].length; j++) {
                System.out.print(result[i][j]);
                if (j < result[i].length - 1) {
                    System.out.print(", ");
                }
            }
            System.out.println("]");
        }
    }
}
