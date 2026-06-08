/**
 * Examples of custom exceptions
 */

public class custom_exceptions {

    public static void main(String[] args) {
        System.out.println("=== CUSTOM EXCEPTIONS - DAY 6 ===\n");

        try {
            validateAge(-5);
        } catch (InvalidAgeException e) {
            System.out.println("Caught InvalidAgeException: " + e.getMessage());
        }

        try {
            processUser(null);
        } catch (UserNotFoundException e) {
            System.out.println("Caught UserNotFoundException: " + e.getMessage());
            System.out.println("Cause: " + e.getCause());
        }
    }

    public static void validateAge(int age) throws InvalidAgeException {
        if (age < 0 || age > 150) throw new InvalidAgeException("Age must be 0-150");
        System.out.println("Age valid: " + age);
    }

    public static void processUser(String user) throws UserNotFoundException {
        try {
            if (user == null) throw new NullPointerException("User is null");
            // process user
        } catch (NullPointerException e) {
            throw new UserNotFoundException("User not found", e);
        }
    }
}

class InvalidAgeException extends Exception {
    public InvalidAgeException(String message) {
        super(message);
    }
}

class UserNotFoundException extends Exception {
    public UserNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }
}
