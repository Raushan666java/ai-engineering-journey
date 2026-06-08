import java.io.*;

public class try_with_resources {
    public static void main(String[] args) {
        System.out.println("=== TRY-WITH-RESOURCES - DAY 6 ===\n");

        tryWithResourcesExample();
    }

    public static void tryWithResourcesExample() {
        System.out.println("1. try-with-resources example");
        StringReader sr = new StringReader("line1\nline2");

        try (BufferedReader br = new BufferedReader(sr)) {
            System.out.println(br.readLine());
            System.out.println(br.readLine());
        } catch (IOException ex) {
            System.out.println("IO failed: " + ex.getMessage());
        }

        System.out.println();
    }
}
