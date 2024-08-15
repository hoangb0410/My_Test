public class C2_P1 {
    public static void main(String[] args) {
        int[] SBC = {50, 20, 40, 22, 39, 23, 35, 25, 30, 28};
        int[] BS = {30, 31, 32, 33, 34, 35, 36, 37, 38, 39};
        int[] BP = {40, 41, 37, 43, 44, 45, 46, 33, 48, 49};

        // Tính số lượng tuổi trùng nhau giữa BS và BP
        System.out.println("Số người trùng tuổi nhau giữa 2 bộ phận BS và BP: " + sameAge(BS, BP) * 2 + " người");

        // Tính số lượng tuổi trùng nhau giữa SBC và BS
        System.out.println("Số người trùng tuổi nhau giữa 2 bộ phận SBC và BS: " + sameAge(SBC, BS) * 2 + " người");

        // Tính số lượng tuổi trùng nhau giữa SBC và BP
        System.out.println("Số người trùng tuổi nhau giữa 2 bộ phận SBC và BP: " + sameAge(SBC, BP) * 2 + " người");
    }

    // Hàm tính số lượng tuổi bị trùng
    public static int sameAge(int[] array1, int[] array2) {
        int count = 0;
        for (int i = 0; i < array1.length; i++) {
            for (int j = 0; j < array2.length; j++) {
                if (array1[i] == array2[j]) {
                    count++;
                }
            }
        }
        return count;
    }
}
