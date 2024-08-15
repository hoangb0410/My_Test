public class C1 {
    public static void main(String[] args) {
        int[] age = {20, 23, 25, 50, 39, 28, 40, 22, 30, 35};
        // Sắp xếp mảng tuổi lớn nhất cạnh nhỏ nhất, lớn nhì cạnh nhỏ nhì, ...
        int[] result = specialSort(age);
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i]);
            System.out.print(" ");
        }
    }
    // Hàm sắp xếp tuổi lớn nhất cạnh nhỏ nhất, lớn nhì cạnh nhỏ nhì, ...
    public static int[] specialSort(int[] array) {
        // Sắp xếp mảng tăng dần
        bubbleSort(array);
        // Tạo mảng kết quả
        int[] result = new int[array.length];
        // Chia mảng thành 2 phần
        int left = 0;
        int right = array.length - 1;
        int index = 0;
        // Kết hợp 2 phần
        while (left <= right) {
            if (left == right) {
                result[index++] = array[left];
            } else {
                result[index++] = array[right];
                result[index++] = array[left];
            }
            left++;
            right--;
        }
        return result;
    }
    public static void bubbleSort(int[] array) {
        int n = array.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - 1 - i; j++) {
                if (array[j] > array[j + 1]) {
                    int temp = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = temp;
                }
            }
        }
    }
}
