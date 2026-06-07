public class exception_utilities {
    public static void closeQuietly(AutoCloseable ac) {
        if (ac == null) return;
        try { ac.close(); } catch (Exception e) { /* ignore */ }
    }

    public static void logException(Exception e) {
        System.err.println("[ERROR] " + e.getClass().getSimpleName() + ": " + e.getMessage());
    }
}