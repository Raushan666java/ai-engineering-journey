/**
 * Resource Manager Example: Demonstrates try-with-resources, custom exception and resource cleanup.
 */

import java.io.*;

public class ResourceManagerExample {
    public static void main(String[] args) {
        System.out.println("╔══════════════════════════════════════════════════╗");
        System.out.println("║       RESOURCE MANAGER: TRY-WITH-RESOURCES       ║");
        System.out.println("╚══════════════════════════════════════════════════╝\n");

        try {
            processFile("non_existent.txt");
        } catch (IOException e) {
            System.out.println("Caught IO Exception: " + e.getMessage());
        }
    }

    static void processFile(String path) throws IOException {
        // Demonstrates try-with-resources
        try (BufferedReader br = new BufferedReader(new FileReader(path))) {
            String line;
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (FileNotFoundException fnf) {
            throw new IOException("File not found: " + path);
        }
    }
}
