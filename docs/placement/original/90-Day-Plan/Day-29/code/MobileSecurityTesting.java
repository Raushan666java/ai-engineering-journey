/**
 * DAY 29: MOBILE SECURITY & TESTING
 * 
 * Topics Covered:
 * 1. Secure Storage (Encryption)
 * 2. Authentication & Authorization
 * 3. Certificate Pinning
 * 4. Biometric Authentication
 * 5. Unit Testing Mobile Components
 * 6. Integration Testing
 * 7. UI Testing Patterns
 * 8. Test Doubles (Mocks, Stubs, Fakes)
 * 
 * @author Placement Preparation Team
 * @date December 3, 2025
 */

import javax.crypto.*;
import javax.crypto.spec.*;
import java.security.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.io.*;

public class MobileSecurityTesting {

    /**
     * ========================================================================
     * PATTERN 1: SECURE STORAGE WITH ENCRYPTION
     * ========================================================================
     * 
     * Security Requirements:
     * 1. Encrypt sensitive data at rest
     * 2. Use hardware-backed key storage
     * 3. Secure key derivation
     * 4. Prevent unauthorized access
     * 
     * Android: EncryptedSharedPreferences (Jetpack Security)
     * iOS: Keychain Services
     * 
     * Encryption: AES-256-GCM
     * Key Derivation: PBKDF2 with salt
     */
    
    static class SecureStorage {
        private static final String ALGORITHM = "AES/GCM/NoPadding";
        private static final int GCM_IV_LENGTH = 12;
        private static final int GCM_TAG_LENGTH = 16;
        private static final int KEY_SIZE = 256;
        
        private final SecretKey encryptionKey;
        private final Map<String, byte[]> storage = new ConcurrentHashMap<>();
        
        public SecureStorage(String masterPassword) throws Exception {
            this.encryptionKey = deriveKey(masterPassword);
        }
        
        // Derive encryption key from password using PBKDF2
        private SecretKey deriveKey(String password) throws Exception {
            // In production, use a secure random salt and store it
            byte[] salt = "SecureSalt12345!".getBytes(); // Fixed for demo
            
            SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256");
            KeySpec spec = new PBEKeySpec(
                password.toCharArray(),
                salt,
                100000, // iterations
                KEY_SIZE
            );
            
            byte[] keyBytes = factory.generateSecret(spec).getEncoded();
            return new SecretKeySpec(keyBytes, "AES");
        }
        
        // Encrypt and store data
        public void putSecure(String key, String value) throws Exception {
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            
            // Generate random IV
            byte[] iv = new byte[GCM_IV_LENGTH];
            SecureRandom random = new SecureRandom();
            random.nextBytes(iv);
            
            GCMParameterSpec spec = new GCMParameterSpec(GCM_TAG_LENGTH * 8, iv);
            cipher.init(Cipher.ENCRYPT_MODE, encryptionKey, spec);
            
            byte[] encrypted = cipher.doFinal(value.getBytes());
            
            // Store IV + encrypted data
            byte[] combined = new byte[GCM_IV_LENGTH + encrypted.length];
            System.arraycopy(iv, 0, combined, 0, GCM_IV_LENGTH);
            System.arraycopy(encrypted, 0, combined, GCM_IV_LENGTH, encrypted.length);
            
            storage.put(key, combined);
            System.out.println("Encrypted and stored: " + key);
        }
        
        // Retrieve and decrypt data
        public String getSecure(String key) throws Exception {
            byte[] combined = storage.get(key);
            if (combined == null) return null;
            
            // Extract IV and encrypted data
            byte[] iv = new byte[GCM_IV_LENGTH];
            byte[] encrypted = new byte[combined.length - GCM_IV_LENGTH];
            System.arraycopy(combined, 0, iv, 0, GCM_IV_LENGTH);
            System.arraycopy(combined, GCM_IV_LENGTH, encrypted, 0, encrypted.length);
            
            Cipher cipher = Cipher.getInstance(ALGORITHM);
            GCMParameterSpec spec = new GCMParameterSpec(GCM_TAG_LENGTH * 8, iv);
            cipher.init(Cipher.DECRYPT_MODE, encryptionKey, spec);
            
            byte[] decrypted = cipher.doFinal(encrypted);
            System.out.println("Retrieved and decrypted: " + key);
            return new String(decrypted);
        }
        
        // Remove data
        public void remove(String key) {
            storage.remove(key);
            System.out.println("Removed: " + key);
        }
        
        // Clear all data
        public void clear() {
            storage.clear();
            System.out.println("Cleared all secure storage");
        }
    }
    
    /**
     * TOKEN STORAGE WITH EXPIRY
     * 
     * Stores auth tokens securely with automatic expiration
     */
    static class TokenStorage {
        private final SecureStorage secureStorage;
        
        static class Token {
            public final String accessToken;
            public final String refreshToken;
            public final long expiresAt;
            
            public Token(String accessToken, String refreshToken, long expiresInSeconds) {
                this.accessToken = accessToken;
                this.refreshToken = refreshToken;
                this.expiresAt = System.currentTimeMillis() + (expiresInSeconds * 1000);
            }
            
            public boolean isExpired() {
                return System.currentTimeMillis() >= expiresAt;
            }
            
            public String serialize() {
                return accessToken + "|" + refreshToken + "|" + expiresAt;
            }
            
            public static Token deserialize(String data) {
                String[] parts = data.split("\\|");
                Token token = new Token(parts[0], parts[1], 0);
                return token;
            }
        }
        
        public TokenStorage(SecureStorage secureStorage) {
            this.secureStorage = secureStorage;
        }
        
        public void saveToken(Token token) throws Exception {
            secureStorage.putSecure("auth_token", token.serialize());
        }
        
        public Token getToken() throws Exception {
            String data = secureStorage.getSecure("auth_token");
            if (data == null) return null;
            
            Token token = Token.deserialize(data);
            if (token.isExpired()) {
                secureStorage.remove("auth_token");
                return null;
            }
            
            return token;
        }
        
        public void clearToken() {
            secureStorage.remove("auth_token");
        }
    }
    
    /**
     * SECURE STORAGE DEMONSTRATION
     * 
     * Security Features:
     * - AES-256-GCM encryption
     * - Key derivation (PBKDF2)
     * - Random IVs
     * - Authenticated encryption
     */
    static void demonstrateSecureStorage() throws Exception {
        System.out.println("\n=== Secure Storage ===\n");
        
        SecureStorage storage = new SecureStorage("MySecurePassword123!");
        
        // Store sensitive data
        storage.putSecure("credit_card", "4532-1234-5678-9010");
        storage.putSecure("api_key", "sk_live_abc123xyz789");
        
        // Retrieve data
        String creditCard = storage.getSecure("credit_card");
        System.out.println("Decrypted credit card: " + creditCard);
        
        // Token storage
        System.out.println("\nToken Storage:");
        TokenStorage tokenStorage = new TokenStorage(storage);
        
        TokenStorage.Token token = new TokenStorage.Token(
            "eyJhbGciOiJIUzI1NiJ9.access",
            "eyJhbGciOiJIUzI1NiJ9.refresh",
            3600 // 1 hour
        );
        
        tokenStorage.saveToken(token);
        
        TokenStorage.Token retrieved = tokenStorage.getToken();
        System.out.println("Token retrieved: " + (retrieved != null ? "Valid" : "Expired"));
        
        System.out.println("\n✓ Security Features:");
        System.out.println("  - AES-256-GCM encryption");
        System.out.println("  - Secure key derivation");
        System.out.println("  - Automatic expiration");
        System.out.println("  - Protected storage");
    }
    
    /**
     * ========================================================================
     * PATTERN 2: CERTIFICATE PINNING
     * ========================================================================
     * 
     * SSL Pinning protects against MITM attacks by:
     * 1. Embedding expected certificate/public key
     * 2. Validating server certificate matches
     * 3. Rejecting connections if mismatch
     * 
     * Types:
     * - Certificate Pinning: Pin full certificate
     * - Public Key Pinning: Pin public key only
     * 
     * Benefits:
     * - Prevents MITM attacks
     * - Protects against rogue CAs
     * - Enhanced security for sensitive apps
     */
    
    static class CertificatePinner {
        private final Map<String, Set<String>> pinnedCertificates;
        
        public CertificatePinner() {
            this.pinnedCertificates = new HashMap<>();
        }
        
        // Pin a certificate for a hostname
        public void pin(String hostname, String certificateHash) {
            pinnedCertificates
                .computeIfAbsent(hostname, k -> new HashSet<>())
                .add(certificateHash);
            System.out.println("Pinned certificate for: " + hostname);
        }
        
        // Validate connection
        public boolean validate(String hostname, String certificateHash) {
            Set<String> pins = pinnedCertificates.get(hostname);
            if (pins == null) {
                System.out.println("No pins for hostname: " + hostname);
                return true; // No pinning configured
            }
            
            boolean valid = pins.contains(certificateHash);
            if (valid) {
                System.out.println("✓ Certificate valid for: " + hostname);
            } else {
                System.out.println("✗ Certificate validation FAILED for: " + hostname);
                System.out.println("  Expected one of: " + pins);
                System.out.println("  Received: " + certificateHash);
            }
            
            return valid;
        }
        
        // Extract public key hash from certificate (simplified)
        public static String extractPublicKeyHash(String certificate) {
            try {
                MessageDigest md = MessageDigest.getInstance("SHA-256");
                byte[] hash = md.digest(certificate.getBytes());
                return Base64.getEncoder().encodeToString(hash);
            } catch (NoSuchAlgorithmException e) {
                return "";
            }
        }
    }
    
    /**
     * SECURE HTTP CLIENT WITH PINNING
     */
    static class SecureHttpClient {
        private final CertificatePinner pinner;
        
        public SecureHttpClient(CertificatePinner pinner) {
            this.pinner = pinner;
        }
        
        public CompletableFuture<String> get(String url, String serverCertificate) {
            return CompletableFuture.supplyAsync(() -> {
                try {
                    // Extract hostname
                    String hostname = new URL(url).getHost();
                    
                    // Extract certificate hash
                    String certHash = CertificatePinner.extractPublicKeyHash(serverCertificate);
                    
                    // Validate pinning
                    if (!pinner.validate(hostname, certHash)) {
                        throw new SecurityException("Certificate pinning validation failed");
                    }
                    
                    // Proceed with request
                    System.out.println("Making secure request to: " + url);
                    return "{\"status\": \"success\"}";
                    
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            });
        }
    }
    
    /**
     * CERTIFICATE PINNING DEMONSTRATION
     */
    static void demonstrateCertificatePinning() throws Exception {
        System.out.println("\n=== Certificate Pinning ===\n");
        
        CertificatePinner pinner = new CertificatePinner();
        
        // Pin certificates for production servers
        String validCertHash = CertificatePinner.extractPublicKeyHash("VALID_PROD_CERT");
        pinner.pin("api.example.com", validCertHash);
        
        SecureHttpClient client = new SecureHttpClient(pinner);
        
        // Valid request
        System.out.println("Request with valid certificate:");
        try {
            client.get("https://api.example.com/data", "VALID_PROD_CERT").join();
        } catch (Exception e) {
            System.out.println("Request failed: " + e.getMessage());
        }
        
        // Invalid request (MITM attempt)
        System.out.println("\nRequest with invalid certificate (MITM):");
        try {
            client.get("https://api.example.com/data", "MALICIOUS_CERT").join();
        } catch (Exception e) {
            System.out.println("Request blocked: Certificate mismatch");
        }
        
        System.out.println("\n✓ Certificate Pinning Benefits:");
        System.out.println("  - Prevents MITM attacks");
        System.out.println("  - Protects against rogue CAs");
        System.out.println("  - Enhanced security");
    }
    
    /**
     * ========================================================================
     * PATTERN 3: BIOMETRIC AUTHENTICATION
     * ========================================================================
     * 
     * Biometric Authentication:
     * - Fingerprint
     * - Face recognition
     * - Iris scan
     * 
     * Android: BiometricPrompt API
     * iOS: Local Authentication (Face ID, Touch ID)
     * 
     * Flow:
     * 1. Check biometric availability
     * 2. Show biometric prompt
     * 3. Handle success/failure/cancellation
     * 4. Fallback to PIN/password
     */
    
    static class BiometricAuthenticator {
        
        enum BiometricType {
            FINGERPRINT,
            FACE,
            IRIS,
            NONE
        }
        
        enum AuthResult {
            SUCCESS,
            FAILED,
            ERROR,
            CANCELLED
        }
        
        interface AuthCallback {
            void onAuthResult(AuthResult result, String message);
        }
        
        private BiometricType availableType = BiometricType.FINGERPRINT;
        
        // Check if biometric authentication is available
        public BiometricType checkAvailability() {
            // In real app, query device capabilities
            System.out.println("Checking biometric availability...");
            System.out.println("  Available: " + availableType);
            return availableType;
        }
        
        // Authenticate with biometrics
        public void authenticate(String title, String subtitle, AuthCallback callback) {
            System.out.println("\nShowing biometric prompt:");
            System.out.println("  Title: " + title);
            System.out.println("  Subtitle: " + subtitle);
            
            // Simulate biometric authentication
            CompletableFuture.runAsync(() -> {
                try {
                    Thread.sleep(500); // Simulate scan time
                    
                    // Simulate successful auth (80% success rate)
                    if (Math.random() < 0.8) {
                        callback.onAuthResult(AuthResult.SUCCESS, "Authentication successful");
                    } else {
                        callback.onAuthResult(AuthResult.FAILED, "Biometric not recognized");
                    }
                    
                } catch (InterruptedException e) {
                    callback.onAuthResult(AuthResult.ERROR, "Authentication interrupted");
                }
            });
        }
        
        // Authenticate with fallback
        public void authenticateWithFallback(
            String title,
            String subtitle,
            String fallbackTitle,
            AuthCallback callback
        ) {
            authenticate(title, subtitle, (result, message) -> {
                if (result == AuthResult.SUCCESS) {
                    callback.onAuthResult(result, message);
                } else {
                    // Fallback to PIN/password
                    System.out.println("  Biometric failed, showing fallback: " + fallbackTitle);
                    authenticateWithPIN(callback);
                }
            });
        }
        
        private void authenticateWithPIN(AuthCallback callback) {
            // Simulate PIN authentication
            System.out.println("  Authenticating with PIN...");
            callback.onAuthResult(AuthResult.SUCCESS, "PIN authentication successful");
        }
    }
    
    /**
     * BIOMETRIC AUTHENTICATION DEMONSTRATION
     */
    static void demonstrateBiometricAuth() throws InterruptedException {
        System.out.println("\n=== Biometric Authentication ===\n");
        
        BiometricAuthenticator authenticator = new BiometricAuthenticator();
        
        // Check availability
        BiometricAuthenticator.BiometricType type = authenticator.checkAvailability();
        
        // Authenticate
        System.out.println("\nAuthentication attempt 1:");
        CountDownLatch latch1 = new CountDownLatch(1);
        authenticator.authenticate(
            "Login Required",
            "Use fingerprint to login",
            (result, message) -> {
                System.out.println("  Result: " + result);
                System.out.println("  Message: " + message);
                latch1.countDown();
            }
        );
        latch1.await();
        
        // Authenticate with fallback
        System.out.println("\nAuthentication attempt 2 (with fallback):");
        CountDownLatch latch2 = new CountDownLatch(1);
        authenticator.authenticateWithFallback(
            "Secure Login",
            "Verify your identity",
            "Enter PIN",
            (result, message) -> {
                System.out.println("  Result: " + result);
                System.out.println("  Message: " + message);
                latch2.countDown();
            }
        );
        latch2.await();
        
        System.out.println("\n✓ Biometric Auth Benefits:");
        System.out.println("  - Convenient & fast");
        System.out.println("  - Secure authentication");
        System.out.println("  - Fallback options");
        System.out.println("  - Better UX");
    }
    
    /**
     * ========================================================================
     * PATTERN 4: UNIT TESTING MOBILE COMPONENTS
     * ========================================================================
     * 
     * Testing Best Practices:
     * 1. Test business logic (ViewModels, Use Cases)
     * 2. Use test doubles (Mocks, Fakes)
     * 3. Test state transitions
     * 4. Test error handling
     * 5. Fast, isolated tests
     * 
     * Testing Frameworks:
     * - JUnit (Java/Android)
     * - XCTest (iOS)
     * - Jest (React Native)
     * 
     * Pattern: AAA (Arrange-Act-Assert)
     */
    
    // Example: Testing a ViewModel
    static class UserViewModel {
        
        interface UserRepository {
            CompletableFuture<User> getUser(String id);
            CompletableFuture<Boolean> updateUser(User user);
        }
        
        static class User {
            public String id;
            public String name;
            public String email;
            
            public User(String id, String name, String email) {
                this.id = id;
                this.name = name;
                this.email = email;
            }
        }
        
        enum State {
            IDLE, LOADING, SUCCESS, ERROR
        }
        
        private final UserRepository repository;
        private State state = State.IDLE;
        private User currentUser = null;
        private String errorMessage = null;
        
        public UserViewModel(UserRepository repository) {
            this.repository = repository;
        }
        
        public void loadUser(String userId) {
            state = State.LOADING;
            
            repository.getUser(userId)
                .thenAccept(user -> {
                    this.currentUser = user;
                    this.state = State.SUCCESS;
                })
                .exceptionally(error -> {
                    this.errorMessage = error.getMessage();
                    this.state = State.ERROR;
                    return null;
                });
        }
        
        public void updateUserName(String newName) {
            if (currentUser == null) return;
            
            currentUser.name = newName;
            state = State.LOADING;
            
            repository.updateUser(currentUser)
                .thenAccept(success -> {
                    this.state = success ? State.SUCCESS : State.ERROR;
                })
                .exceptionally(error -> {
                    this.errorMessage = error.getMessage();
                    this.state = State.ERROR;
                    return null;
                });
        }
        
        public State getState() { return state; }
        public User getCurrentUser() { return currentUser; }
        public String getErrorMessage() { return errorMessage; }
    }
    
    // Test Doubles: Fake Repository
    static class FakeUserRepository implements UserViewModel.UserRepository {
        private final Map<String, UserViewModel.User> users = new HashMap<>();
        private boolean shouldFail = false;
        
        public void addUser(UserViewModel.User user) {
            users.put(user.id, user);
        }
        
        public void setShouldFail(boolean fail) {
            this.shouldFail = fail;
        }
        
        @Override
        public CompletableFuture<UserViewModel.User> getUser(String id) {
            if (shouldFail) {
                return CompletableFuture.failedFuture(
                    new RuntimeException("Network error")
                );
            }
            
            UserViewModel.User user = users.get(id);
            if (user == null) {
                return CompletableFuture.failedFuture(
                    new RuntimeException("User not found")
                );
            }
            
            return CompletableFuture.completedFuture(user);
        }
        
        @Override
        public CompletableFuture<Boolean> updateUser(UserViewModel.User user) {
            if (shouldFail) {
                return CompletableFuture.failedFuture(
                    new RuntimeException("Network error")
                );
            }
            
            users.put(user.id, user);
            return CompletableFuture.completedFuture(true);
        }
    }
    
    // Unit Tests
    static class UserViewModelTest {
        
        static void testLoadUser_Success() throws InterruptedException {
            System.out.println("\nTest: Load User - Success");
            
            // Arrange
            FakeUserRepository repository = new FakeUserRepository();
            repository.addUser(new UserViewModel.User("1", "John", "john@example.com"));
            UserViewModel viewModel = new UserViewModel(repository);
            
            // Act
            viewModel.loadUser("1");
            Thread.sleep(100); // Wait for async
            
            // Assert
            assert viewModel.getState() == UserViewModel.State.SUCCESS : "Expected SUCCESS state";
            assert viewModel.getCurrentUser() != null : "Expected user to be loaded";
            assert viewModel.getCurrentUser().name.equals("John") : "Expected name to be John";
            
            System.out.println("  ✓ Test passed");
        }
        
        static void testLoadUser_NotFound() throws InterruptedException {
            System.out.println("\nTest: Load User - Not Found");
            
            // Arrange
            FakeUserRepository repository = new FakeUserRepository();
            UserViewModel viewModel = new UserViewModel(repository);
            
            // Act
            viewModel.loadUser("999");
            Thread.sleep(100);
            
            // Assert
            assert viewModel.getState() == UserViewModel.State.ERROR : "Expected ERROR state";
            assert viewModel.getErrorMessage() != null : "Expected error message";
            
            System.out.println("  ✓ Test passed");
        }
        
        static void testUpdateUser_Success() throws InterruptedException {
            System.out.println("\nTest: Update User - Success");
            
            // Arrange
            FakeUserRepository repository = new FakeUserRepository();
            repository.addUser(new UserViewModel.User("1", "John", "john@example.com"));
            UserViewModel viewModel = new UserViewModel(repository);
            viewModel.loadUser("1");
            Thread.sleep(100);
            
            // Act
            viewModel.updateUserName("Jane");
            Thread.sleep(100);
            
            // Assert
            assert viewModel.getState() == UserViewModel.State.SUCCESS : "Expected SUCCESS state";
            assert viewModel.getCurrentUser().name.equals("Jane") : "Expected name to be updated";
            
            System.out.println("  ✓ Test passed");
        }
        
        static void runAllTests() throws InterruptedException {
            System.out.println("\n=== Unit Tests: UserViewModel ===");
            
            testLoadUser_Success();
            testLoadUser_NotFound();
            testUpdateUser_Success();
            
            System.out.println("\n✓ All tests passed!");
        }
    }
    
    /**
     * ========================================================================
     * MAIN METHOD
     * ========================================================================
     */
    public static void main(String[] args) throws Exception {
        System.out.println("=".repeat(80));
        System.out.println("DAY 29: MOBILE SECURITY & TESTING");
        System.out.println("=".repeat(80));
        
        demonstrateSecureStorage();
        demonstrateCertificatePinning();
        demonstrateBiometricAuth();
        UserViewModelTest.runAllTests();
        
        System.out.println("\n" + "=".repeat(80));
        System.out.println("All security & testing patterns demonstrated!");
        System.out.println("=".repeat(80));
    }
}
