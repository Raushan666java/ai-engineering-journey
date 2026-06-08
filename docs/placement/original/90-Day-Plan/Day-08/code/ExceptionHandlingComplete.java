/**
 * DAY 8: EXCEPTION HANDLING - COMPLETE GUIDE
 * 
 * Topics:
 * - Checked vs Unchecked exceptions
 * - try-catch-finally
 * - try-with-resources
 * - throw vs throws
 * - Custom exceptions
 * - Exception chaining and suppressed exceptions
 */

import java.io.*;

public class ExceptionHandlingComplete {
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════╗");
        System.out.println("║    DAY 8: EXCEPTION HANDLING - COMPLETE GUIDE    ║");
        System.out.println("╚══════════════════════════════════════════════════╝\n");

        demonstrateCheckedUnchecked();
        demonstrateTryCatchFinally();
        demonstrateTryWithResources();
        demonstrateThrowThrows();
        demonstrateCustomException();
        demonstrateSuppressed();
    }

    static void demonstrateCheckedUnchecked(){
        System.out.println("\n--- Checked vs Unchecked ---");
        System.out.println("Checked exception example: File operations (IOException)");
        try { new FileInputStream("some_non_existent_file.txt"); } catch (IOException e) { System.out.println("Caught checked exception: " + e.getMessage()); }
        System.out.println("Unchecked exception example: ArithmeticException");
        try { int x=1/0; } catch (ArithmeticException e) { System.out.println("Caught unchecked: " + e.getMessage()); }
    }

    static void demonstrateTryCatchFinally(){
        System.out.println("\n--- try-catch-finally ---");
        try {
            int[] arr = {1,2,3};
            System.out.println(arr[10]);
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println("Index error: " + e.getMessage());
        } finally {
            System.out.println("Finally always runs");
        }
    }

    static void demonstrateTryWithResources(){
        System.out.println("\n--- try-with-resources ---");
        try (ByteArrayInputStream in = new ByteArrayInputStream(new byte[]{1,2,3})) {
            System.out.println("Resource open size: " + in.available());
        } catch (IOException e) {
            System.out.println("IO error: " + e.getMessage());
        }
    }

    static void demonstrateThrowThrows(){
        System.out.println("\n--- throw vs throws ---");
        try {
            mayThrowException(true);
        } catch (CustomCheckedException c) {
            System.out.println("Caught from main: " + c.getMessage());
        }
    }

    static void mayThrowException(boolean doThrow) throws CustomCheckedException {
        if (doThrow) throw new CustomCheckedException("Custom checked exception thrown");
    }

    static void demonstrateCustomException(){
        System.out.println("\n--- Custom Exceptions ---");
        try { riskyOperation(); } catch (OperationFailedException e) { System.out.println("Operation failed: " + e.getMessage()); }
    }

    static void riskyOperation() throws OperationFailedException {
        throw new OperationFailedException("Failed due to X reason");
    }

    static void demonstrateSuppressed(){
        System.out.println("\n--- Suppressed exceptions & rethrowing ---");
        try (AutoCloseable ac = new AutoCloseable() { public void close() throws Exception { throw new Exception("close failure"); } }){
            throw new Exception("Primary error");
        } catch (Exception e) {
            System.out.println("Primary: " + e.getMessage());
            for (Throwable t : e.getSuppressed()) {
                System.out.println("Suppressed: " + t.getMessage());
            }
        }
    }
}

class CustomCheckedException extends Exception { CustomCheckedException(String m){ super(m); } }
class OperationFailedException extends Exception { OperationFailedException(String m){ super(m); } }
