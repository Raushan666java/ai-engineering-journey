import java.io.*;
import java.nio.file.*;
import java.util.*;

public class file_utilities {

    // Read file as single string
    public static String readFileAsString(String filename) throws IOException {
        return new String(Files.readAllBytes(Paths.get(filename)));
    }

    // Write string to file
    public static void writeStringToFile(String filename, String content) throws IOException {
        Files.write(Paths.get(filename), content.getBytes());
    }

    // Append line to file
    public static void appendLine(String filename, String line) throws IOException {
        Files.write(Paths.get(filename), (line + System.lineSeparator()).getBytes(), 
                    StandardOpenOption.CREATE, StandardOpenOption.APPEND);
    }

    // Check if file exists
    public static boolean fileExists(String filename) {
        return Files.exists(Paths.get(filename));
    }

    // Delete file safely
    public static boolean deleteFile(String filename) {
        try {
            Files.delete(Paths.get(filename));
            return true;
        } catch (IOException e) {
            return false;
        }
    }

    // Get file size
    public static long getFileSize(String filename) throws IOException {
        return Files.size(Paths.get(filename));
    }
}
