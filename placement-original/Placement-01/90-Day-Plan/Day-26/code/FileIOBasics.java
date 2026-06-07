import java.io.*;
import java.nio.file.*;
import java.util.*;

public class FileIOBasics {
    public static void main(String[] args) {
        String filename = "data_output.txt";
        List<String> lines = Arrays.asList("first line","second line","third line");
        boolean ci = false; for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) ci = true;
        try {
            Files.write(Paths.get(filename), lines);
            System.out.println("Wrote file: " + filename);
        } catch (IOException e) {
            System.out.println("Write error: " + e.getMessage());
            return;
        }

        try (BufferedReader br = Files.newBufferedReader(Paths.get(filename))) {
            String l; while ((l = br.readLine()) != null) System.out.println("Line: " + l);
        } catch (IOException e) {
            System.out.println("Read error: " + e.getMessage());
        }
        if (ci) {
            try {
                List<String> read = Files.readAllLines(Paths.get(filename));
                boolean ok = read.equals(lines);
                if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1);}            
            } catch (IOException e) { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
