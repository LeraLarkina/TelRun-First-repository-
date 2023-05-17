package Homework;

public class HW17_05_2023 {
    public static void main(String[] args) {

        char numb = '4';

        int result1 = Integer.parseInt(String.valueOf(numb));

        int result2 = Character.getNumericValue(numb);
        System.out.println(result1 + 6);
        System.out.println(result2 + 6);

    }
}
