// package practice.dsa;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
import java.util.ArrayList;

public class HelloWorld {
    public static void main(String[] args) {
        int sum = 0;
        ArrayList<Integer> numbers = new ArrayList<>();
        try {
            Scanner sc = new Scanner(new File("input.txt"));
            while (sc.hasNextInt()) {
                int num = sc.nextInt();
                sum += num;
                numbers.add(num);
            }
            sc.close();
            System.out.println("Numbers: " + numbers);
            System.out.println("Sum: " + sum);
        } catch (FileNotFoundException e) {
            System.out.println("input.txt file not found.");
        }
    }
}
