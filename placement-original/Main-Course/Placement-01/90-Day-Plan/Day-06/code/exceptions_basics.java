/**
 * Demonstrates basic exception handling constructs
 */

import java.io.*;

public class exceptions_basics {

    public static void main(String[] args) {
        System.out.println("=== EXCEPTIONS BASICS - DAY 6 ===\n");

        tryCatchExample();
        multipleCatchExample();
        finallyExample();
        checkedExceptionExample();
    }

    public static void tryCatchExample() {
        System.out.println("1. try-catch example");
        try {
            int a = Integer.parseInt("not-a-number");
            System.out.println(a);
        } catch (NumberFormatException ex) {
            System.out.println("Caught NumberFormatException: " + ex.getMessage());
        }
        System.out.println();
    }

    public static void multipleCatchExample() {
        System.out.println("2. multiple catch example");
        try {
            String s = null;
            System.out.println(s.length());
        } catch (ArithmeticException ex) {
            System.out.println("Arithmetic exception");
        } catch (NullPointerException ex) {
            System.out.println("Null pointer caught: " + ex.getMessage());
        } catch (Exception ex) {
            System.out.println("Generic exception caught");
        }
        System.out.println();
    }

    public static void finallyExample() {
        System.out.println("3. finally example (resource cleanup)");
        BufferedReader br = null;
        try {
            br = new BufferedReader(new StringReader("Hello\nWorld"));
            System.out.println(br.readLine());
        } catch (IOException ex) {
            System.out.println("IO failed: " + ex.getMessage());
        } finally {
            // close resource
            try {
                if (br != null) br.close();
            } catch (IOException ignore) {
                // ignore
            }
            System.out.println("Finally block executed");
        }
        System.out.println();
    }

    public static void checkedExceptionExample() {
        System.out.println("4. checked exception example (throws IOException)");
        try {
            methodThatThrowsChecked();
        } catch (IOException ex) {
            System.out.println("Caught IOException from method: " + ex.getMessage());
        }
        System.out.println();
    }

    public static void methodThatThrowsChecked() throws IOException {
        throw new IOException("Example checked exception");
    }
}
