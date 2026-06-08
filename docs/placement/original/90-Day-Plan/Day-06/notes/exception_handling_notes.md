# Day 6 Notes: Exception Handling

## Exception types
- Throwable -> Exception -> RuntimeException (unchecked) and (checked) Exception
- Error (e.g., OutOfMemoryError) = unrecoverable system errors, do not catch

## try / catch / finally
- try: code that may throw
- catch: one or more blocks that handle specific exceptions
- finally: always executed - good for cleanup

try {
    // risky code
} catch (SpecificException ex) {
    // handle
} catch (Exception ex) {
    // fallback
} finally {
    // cleanup
}

## throw vs throws
- throw: actually throws an exception instance (used inside methods)
- throws: declares that method may throw checked exceptions

public void read() throws IOException { ... }

## try-with-resources
- Use for AutoCloseable resources
try (BufferedReader br = new BufferedReader(...)) {
    // read
}
// br automatically closed

## custom exceptions
- Extend Exception for checked exception
- Extend RuntimeException for unchecked exception

public class InvalidInputException extends Exception { ... }

## best practices
- Do not use exceptions for normal control flow
- Log exceptions with context
- Provide meaningful messages and include cause
- Clean up resources in finally or try-with-resources
- Prefer specific catches rather than catch(Exception)

## debugging
- Use stack traces and exception.getCause() to trace root issues

