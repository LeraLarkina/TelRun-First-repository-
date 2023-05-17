package Homework;

import java.util.Scanner;

public class HW16_05_23 {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Введите число: ");
        int numb = sc.nextInt();

        String binary = Integer.toBinaryString(numb);
        String octal = Integer.toOctalString(numb);
        String hex = Integer.toHexString(numb);

        System.out.println("Десятичное: " + numb);
        System.out.println("Двоичное: " + binary);
        System.out.println("Восьмеричное: " + octal);
        System.out.println("Шестнадцатеричное: " + hex);
    }
}
