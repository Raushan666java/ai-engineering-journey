import java.io.*;

public class ExceptionHandlingBasics {
    static class InvalidAgeException extends Exception {
        public InvalidAgeException(String msg) { super(msg); }
    }

    public static int parseAge(String s) throws InvalidAgeException {
        try {
            int age = Integer.parseInt(s);
            if (age < 0 || age > 150) throw new InvalidAgeException("Age out of range: " + age);
            return age;
        } catch (NumberFormatException e) {
            throw new InvalidAgeException("Invalid number: " + s);
        }
    }

    public static void main(String[] args) {
        boolean ci = false; if (args != null) for (String a : args) if ("--ci".equals(a) || "--test".equals(a)) ci = true;
        String[] inputs = {"25","-5","abc","200"};
        for (String s : inputs) {
            try {
                int age = parseAge(s);
                System.out.println(s + " -> age=" + age);
            } catch (InvalidAgeException e) {
                System.out.println("Input='" + s + "' : Error -> " + e.getMessage());
            }
        }
        // try-with-resources example
        System.out.println("Creating temp file using try-with-resources");
        try (FileWriter fw = new FileWriter("temp_example.txt"); BufferedWriter bw = new BufferedWriter(fw)) {
            bw.write("Hello from ExceptionHandlingBasics\n");
        } catch (IOException e) {
            System.out.println("I/O Error: " + e.getMessage());
        }
        System.out.println("Wrote temp_example.txt");
        if (ci) {
            // verify parseAge returns for "25" and throws for others
            boolean ok = true;
            try { ok &= (parseAge("25") == 25); } catch (InvalidAgeException e) { ok = false; }
            try { parseAge("-5"); ok = false; } catch (InvalidAgeException e) {}
            try { parseAge("abc"); ok = false; } catch (InvalidAgeException e) {}
            try { parseAge("200"); ok = false; } catch (InvalidAgeException e) {}
            // check temp file exists
            ok &= new java.io.File("temp_example.txt").exists();
            if (ok) { System.out.println("CI_OK"); System.exit(0);} else { System.out.println("CI_FAIL"); System.exit(1); }
        }
    }
}
