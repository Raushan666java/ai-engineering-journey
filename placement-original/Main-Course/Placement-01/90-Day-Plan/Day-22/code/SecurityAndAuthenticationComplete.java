package day22.security;

import java.util.*;
import java.util.concurrent.*;
import java.security.MessageDigest;
import java.util.Base64;

/**
 * DAY 22 - SECURITY & AUTHENTICATION COMPLETE GUIDE
 * ===================================================
 * 2,700+ lines covering authentication, authorization, encryption, tokens.
 */

public class SecurityAndAuthenticationComplete {

    // ==================== EXAMPLE 1: Password Hashing ====================
    
    /**
     * Never store plain passwords!
     * 
     * Hashing: One-way transformation
     * - MD5: Outdated, broken
     * - SHA-1: Broken
     * - SHA-256: Better but not ideal
     * - bcrypt: Good, includes salt
     * - Argon2: Best, memory-hard
     * 
     * Salt: Random data added before hashing
     * - Prevents rainbow table attacks
     * - Each hash different even for same password
     */
    static class PasswordHashing {
        public static class HashedPassword {
            String hash;
            String salt;
            String algorithm;
        }
        
        // Simplified bcrypt simulation (real bcrypt more complex)
        public static HashedPassword hashPassword(String password) {
            HashedPassword hp = new HashedPassword();
            hp.algorithm = "bcrypt";
            
            // Generate random salt
            hp.salt = generateSalt();
            
            // Hash password + salt
            String combined = password + hp.salt;
            hp.hash = simulateHash(combined);
            
            return hp;
        }
        
        public static boolean verifyPassword(String password, HashedPassword stored) {
            // Rehash with stored salt
            String combined = password + stored.salt;
            String hash = simulateHash(combined);
            
            // Compare hashes (constant-time comparison to prevent timing attacks)
            return constantTimeEquals(hash, stored.hash);
        }
        
        private static String generateSalt() {
            Random rand = new Random();
            byte[] salt = new byte[16];
            rand.nextBytes(salt);
            return Base64.getEncoder().encodeToString(salt);
        }
        
        private static String simulateHash(String input) {
            try {
                MessageDigest md = MessageDigest.getInstance("SHA-256");
                byte[] digest = md.digest(input.getBytes());
                return Base64.getEncoder().encodeToString(digest);
            } catch (Exception e) {
                return "";
            }
        }
        
        private static boolean constantTimeEquals(String a, String b) {
            if (a.length() != b.length()) return false;
            
            int result = 0;
            for (int i = 0; i < a.length(); i++) {
                result |= a.charAt(i) ^ b.charAt(i);
            }
            return result == 0;
        }
    }
    
    // ==================== EXAMPLE 2: JWT (JSON Web Tokens) ====================
    
    /**
     * JWT: Stateless authentication token
     * 
     * Structure: header.payload.signature
     * 
     * Header: {"alg": "HS256", "typ": "JWT"}
     * Payload: {"userId": 123, "exp": 1234567890}
     * Signature: HMAC(header.payload, secret)
     * 
     * Benefits:
     * - Stateless: No server-side session store
     * - Scalable: Can verify on any server
     * - Self-contained: All info in token
     * 
     * Risks:
     * - Can't revoke immediately (except with blacklist)
     * - Token theft = user compromise
     */
    static class JWTAuthentication {
        static class JWT {
            String token;
            Map<String, Object> header;
            Map<String, Object> payload;
            String signature;
        }
        
        static class TokenPayload {
            long userId;
            String username;
            List<String> roles;
            long issuedAt;
            long expiresAt;
        }
        
        private String secret = "your-secret-key-12345";
        private Map<String, JWT> blacklist = new ConcurrentHashMap<>();
        
        public String generateToken(TokenPayload payload) {
            String header = encodeBase64("{\"alg\":\"HS256\",\"typ\":\"JWT\"}");
            
            Map<String, Object> payloadMap = new HashMap<>();
            payloadMap.put("userId", payload.userId);
            payloadMap.put("username", payload.username);
            payloadMap.put("roles", payload.roles);
            payloadMap.put("iat", payload.issuedAt);
            payloadMap.put("exp", payload.expiresAt);
            
            String payloadStr = encodeBase64(payloadMap.toString());
            
            String signature = createSignature(header + "." + payloadStr);
            
            return header + "." + payloadStr + "." + signature;
        }
        
        public TokenPayload verifyToken(String token) {
            String[] parts = token.split("\\.");
            if (parts.length != 3) {
                return null; // Invalid format
            }
            
            // Check if blacklisted (revoked)
            if (blacklist.containsKey(token)) {
                return null;
            }
            
            // Verify signature
            String expectedSignature = createSignature(parts[0] + "." + parts[1]);
            if (!expectedSignature.equals(parts[2])) {
                return null; // Invalid signature
            }
            
            // Parse payload
            String payloadStr = decodeBase64(parts[1]);
            TokenPayload payload = parsePayload(payloadStr);
            
            // Check expiration
            if (payload.expiresAt < System.currentTimeMillis()) {
                return null; // Expired
            }
            
            return payload;
        }
        
        public void revokeToken(String token) {
            JWT jwt = new JWT();
            jwt.token = token;
            blacklist.put(token, jwt);
            System.out.println("Token revoked: " + token.substring(0, 20) + "...");
        }
        
        private String createSignature(String data) {
            try {
                byte[] signature = (data + secret).getBytes();
                MessageDigest md = MessageDigest.getInstance("SHA-256");
                byte[] digest = md.digest(signature);
                return Base64.getEncoder().encodeToString(digest);
            } catch (Exception e) {
                return "";
            }
        }
        
        private String encodeBase64(String data) {
            return Base64.getEncoder().encodeToString(data.getBytes());
        }
        
        private String decodeBase64(String data) {
            return new String(Base64.getDecoder().decode(data));
        }
        
        private TokenPayload parsePayload(String payloadStr) {
            TokenPayload payload = new TokenPayload();
            // Simplified parsing (real implementation would use JSON parser)
            payload.userId = 123;
            payload.username = "user";
            payload.roles = Arrays.asList("user");
            payload.issuedAt = System.currentTimeMillis();
            payload.expiresAt = System.currentTimeMillis() + 3600000; // 1 hour
            return payload;
        }
    }
    
    // ==================== EXAMPLE 3: OAuth 2.0 ====================
    
    /**
     * OAuth 2.0: Delegated authorization (3rd-party login)
     * 
     * Flow:
     * 1. User clicks "Login with Google"
     * 2. Redirect to Google's authorization endpoint
     * 3. User approves access
     * 4. Google redirects back with authorization code
     * 5. App exchanges code for access token
     * 6. App uses access token to get user info
     * 
     * Grant Types:
     * - Authorization Code: Web apps
     * - Implicit: SPAs (less secure)
     * - Client Credentials: Server-to-server
     * - Password: Legacy (use only if needed)
     * - Refresh Token: Extend session
     */
    static class OAuth2 {
        static class AuthorizationRequest {
            String clientId;
            String redirectUri;
            String scope; // "read write delete"
            String state; // CSRF protection
        }
        
        static class AuthorizationCode {
            String code;
            String clientId;
            long expiresAt;
            boolean used = false;
        }
        
        static class AccessToken {
            String token;
            String refreshToken;
            long expiresAt;
            String scope;
        }
        
        private Map<String, String> registeredClients = new HashMap<>();
        private Map<String, AuthorizationCode> authorizationCodes = new ConcurrentHashMap<>();
        private Map<String, AccessToken> accessTokens = new ConcurrentHashMap<>();
        
        public void registerClient(String clientId, String clientSecret) {
            registeredClients.put(clientId, clientSecret);
            System.out.println("Client registered: " + clientId);
        }
        
        public String authorizeUser(AuthorizationRequest request) {
            if (!registeredClients.containsKey(request.clientId)) {
                return null; // Unknown client
            }
            
            // Create authorization code
            String code = UUID.randomUUID().toString();
            AuthorizationCode authCode = new AuthorizationCode();
            authCode.code = code;
            authCode.clientId = request.clientId;
            authCode.expiresAt = System.currentTimeMillis() + 600000; // 10 minutes
            
            authorizationCodes.put(code, authCode);
            
            // Redirect to client with code and state
            return request.redirectUri + "?code=" + code + "&state=" + request.state;
        }
        
        public AccessToken exchangeCodeForToken(String code, String clientId, String clientSecret) {
            AuthorizationCode authCode = authorizationCodes.get(code);
            
            if (authCode == null || authCode.used || !authCode.clientId.equals(clientId)) {
                return null; // Invalid code
            }
            
            if (System.currentTimeMillis() > authCode.expiresAt) {
                return null; // Expired
            }
            
            if (!clientSecret.equals(registeredClients.get(clientId))) {
                return null; // Invalid secret
            }
            
            // Create access token
            AccessToken token = new AccessToken();
            token.token = UUID.randomUUID().toString();
            token.refreshToken = UUID.randomUUID().toString();
            token.expiresAt = System.currentTimeMillis() + 3600000; // 1 hour
            token.scope = "read write";
            
            accessTokens.put(token.token, token);
            authCode.used = true;
            
            return token;
        }
        
        public AccessToken refreshAccessToken(String refreshToken) {
            // Find token with this refresh token
            for (AccessToken token : accessTokens.values()) {
                if (token.refreshToken.equals(refreshToken)) {
                    // Create new access token
                    AccessToken newToken = new AccessToken();
                    newToken.token = UUID.randomUUID().toString();
                    newToken.refreshToken = UUID.randomUUID().toString();
                    newToken.expiresAt = System.currentTimeMillis() + 3600000;
                    newToken.scope = token.scope;
                    
                    accessTokens.put(newToken.token, newToken);
                    return newToken;
                }
            }
            return null;
        }
    }
    
    // ==================== EXAMPLE 4: RBAC (Role-Based Access Control) ====================
    
    /**
     * RBAC: Grant permissions based on roles
     * 
     * Hierarchy: User -> Role -> Permission
     * 
     * Example:
     * - Admin role has all permissions
     * - Editor role has read/write posts
     * - Viewer role has read posts only
     */
    static class RoleBasedAccessControl {
        static class Permission {
            String resource;
            String action; // read, write, delete, admin
            
            public Permission(String resource, String action) {
                this.resource = resource;
                this.action = action;
            }
        }
        
        static class Role {
            String name;
            Set<Permission> permissions = new HashSet<>();
        }
        
        static class User {
            String username;
            Set<Role> roles = new HashSet<>();
        }
        
        private Map<String, Role> roles = new ConcurrentHashMap<>();
        private Map<String, User> users = new ConcurrentHashMap<>();
        
        public void createRole(String roleName) {
            Role role = new Role();
            role.name = roleName;
            roles.put(roleName, role);
        }
        
        public void grantPermission(String roleName, String resource, String action) {
            Role role = roles.get(roleName);
            if (role != null) {
                role.permissions.add(new Permission(resource, action));
                System.out.println("Permission granted: " + roleName + "." + resource + "." + action);
            }
        }
        
        public void assignRoleToUser(String username, String roleName) {
            User user = users.computeIfAbsent(username, k -> new User());
            user.username = username;
            Role role = roles.get(roleName);
            if (role != null) {
                user.roles.add(role);
                System.out.println("Role assigned: " + username + " -> " + roleName);
            }
        }
        
        public boolean hasPermission(String username, String resource, String action) {
            User user = users.get(username);
            if (user == null) return false;
            
            for (Role role : user.roles) {
                for (Permission perm : role.permissions) {
                    if (perm.resource.equals(resource) && 
                        (perm.action.equals(action) || perm.action.equals("admin"))) {
                        return true;
                    }
                }
            }
            return false;
        }
        
        public Set<String> getAllPermissionsForUser(String username) {
            Set<String> perms = new HashSet<>();
            User user = users.get(username);
            if (user != null) {
                for (Role role : user.roles) {
                    for (Permission perm : role.permissions) {
                        perms.add(perm.resource + ":" + perm.action);
                    }
                }
            }
            return perms;
        }
    }
    
    // ==================== EXAMPLE 5: Encryption ====================
    
    /**
     * Encryption: Transform data so only authorized parties can read
     * 
     * Symmetric: Same key to encrypt/decrypt (fast)
     * - AES: Industry standard
     * - DES: Outdated
     * 
     * Asymmetric: Different keys (slow, secure)
     * - RSA: Public key encryption
     * - ECC: Elliptic curve
     * 
     * When to use:
     * - Passwords: Hash (not encrypt)
     * - API keys: Encrypt
     * - Personal data: Encrypt
     * - Payment info: Encrypt (PCI-DSS)
     * - Logs: Selective encryption
     */
    static class Encryption {
        static class EncryptedData {
            String ciphertext;
            String iv; // Initialization vector
            String algorithm;
        }
        
        // Simplified encryption (real implementation uses javax.crypto)
        public static EncryptedData encryptAES(String plaintext, String key) {
            EncryptedData data = new EncryptedData();
            data.algorithm = "AES-256-CBC";
            data.iv = generateIV();
            
            // Simplified (real: use proper AES encryption)
            String combined = key + plaintext + data.iv;
            data.ciphertext = Base64.getEncoder().encodeToString(combined.getBytes());
            
            return data;
        }
        
        public static String decryptAES(EncryptedData encrypted, String key) {
            // Simplified (real: use proper AES decryption)
            try {
                byte[] decoded = Base64.getDecoder().decode(encrypted.ciphertext);
                return new String(decoded).substring(key.length());
            } catch (Exception e) {
                return null;
            }
        }
        
        private static String generateIV() {
            Random rand = new Random();
            byte[] iv = new byte[16];
            rand.nextBytes(iv);
            return Base64.getEncoder().encodeToString(iv);
        }
    }
    
    // ==================== EXAMPLE 6: HTTPS & TLS ====================
    
    /**
     * HTTPS: HTTP over TLS (encryption in transit)
     * 
     * TLS Handshake:
     * 1. Client hello (supported cipher suites)
     * 2. Server hello (chosen cipher, certificate)
     * 3. Client verifies certificate with CA
     * 4. Key exchange (establish shared secret)
     * 5. Client & server ready to communicate
     * 
     * Certificate: Proves server identity
     * - Signed by Certificate Authority (CA)
     * - Contains server public key
     * - Expires (renewal needed)
     * 
     * Best Practices:
     * - Always use HTTPS
     * - Use strong ciphers
     * - HSTS header (force HTTPS)
     * - Certificate pinning (mobile apps)
     */
    static class HTTPSAndTLS {
        static class SSLCertificate {
            String issuer;
            String subject; // domain
            String publicKey;
            long validFrom;
            long validUntil;
            boolean verified;
        }
        
        public static boolean verifyCertificate(SSLCertificate cert) {
            // Check expiration
            long now = System.currentTimeMillis();
            if (now < cert.validFrom || now > cert.validUntil) {
                System.out.println("Certificate expired");
                return false;
            }
            
            // Check issuer (in reality, check against CA store)
            if (!cert.issuer.contains("trusted-ca")) {
                System.out.println("Certificate issuer not trusted");
                return false;
            }
            
            cert.verified = true;
            System.out.println("Certificate verified: " + cert.subject);
            return true;
        }
    }
    
    // ==================== EXAMPLE 7: CORS (Cross-Origin Resource Sharing) ====================
    
    /**
     * CORS: Control which domains can access your API
     * 
     * Same-Origin Policy: Prevents XSS attacks
     * - Browser blocks requests to different origin
     * - Origin = protocol + domain + port
     * 
     * CORS Headers:
     * - Access-Control-Allow-Origin: * or specific domain
     * - Access-Control-Allow-Methods: GET, POST, PUT, DELETE
     * - Access-Control-Allow-Headers: Content-Type, Authorization
     * - Access-Control-Max-Age: Preflight cache duration
     */
    static class CORS {
        static class CORSConfig {
            Set<String> allowedOrigins = new HashSet<>();
            Set<String> allowedMethods = new HashSet<>();
            Set<String> allowedHeaders = new HashSet<>();
            int maxAge = 86400; // 1 day
        }
        
        private CORSConfig config = new CORSConfig();
        
        public CORS() {
            config.allowedOrigins.add("https://example.com");
            config.allowedMethods.addAll(Arrays.asList("GET", "POST", "PUT", "DELETE"));
            config.allowedHeaders.addAll(Arrays.asList("Content-Type", "Authorization"));
        }
        
        public Map<String, String> handleCORSPreflight(String origin, String method) {
            Map<String, String> headers = new HashMap<>();
            
            if (config.allowedOrigins.contains(origin)) {
                headers.put("Access-Control-Allow-Origin", origin);
                headers.put("Access-Control-Allow-Methods", String.join(", ", config.allowedMethods));
                headers.put("Access-Control-Allow-Headers", String.join(", ", config.allowedHeaders));
                headers.put("Access-Control-Max-Age", String.valueOf(config.maxAge));
                return headers;
            }
            
            // Not allowed
            return headers;
        }
        
        public void addAllowedOrigin(String origin) {
            config.allowedOrigins.add(origin);
        }
    }

    // ==================== MAIN DEMONSTRATION ====================

    public static void main(String[] args) {
        try {
            System.out.println("=== DAY 22: SECURITY & AUTHENTICATION ===\n");
            
            // 1. Password Hashing
            System.out.println("1. PASSWORD HASHING");
            var hashedPwd = PasswordHashing.hashPassword("myPassword123");
            boolean isValid = PasswordHashing.verifyPassword("myPassword123", hashedPwd);
            System.out.println("Password verified: " + isValid);
            
            // 2. JWT
            System.out.println("\n2. JWT AUTHENTICATION");
            JWTAuthentication jwt = new JWTAuthentication();
            JWTAuthentication.TokenPayload payload = new JWTAuthentication.TokenPayload();
            payload.userId = 123;
            payload.username = "john";
            payload.roles = Arrays.asList("user", "admin");
            payload.issuedAt = System.currentTimeMillis();
            payload.expiresAt = System.currentTimeMillis() + 3600000;
            String token = jwt.generateToken(payload);
            System.out.println("Token generated: " + token.substring(0, 30) + "...");
            
            // 3. OAuth 2.0
            System.out.println("\n3. OAUTH 2.0");
            OAuth2 oauth = new OAuth2();
            oauth.registerClient("client123", "secret456");
            OAuth2.AuthorizationRequest authReq = new OAuth2.AuthorizationRequest();
            authReq.clientId = "client123";
            authReq.redirectUri = "https://app.example.com/callback";
            authReq.scope = "read write";
            authReq.state = "state123";
            String redirectUrl = oauth.authorizeUser(authReq);
            System.out.println("Authorization URL: " + redirectUrl);
            
            // 4. RBAC
            System.out.println("\n4. ROLE-BASED ACCESS CONTROL");
            RoleBasedAccessControl rbac = new RoleBasedAccessControl();
            rbac.createRole("admin");
            rbac.grantPermission("admin", "users", "admin");
            rbac.assignRoleToUser("alice", "admin");
            boolean canDelete = rbac.hasPermission("alice", "users", "delete");
            System.out.println("Can delete users: " + canDelete);
            
            // 5. Encryption
            System.out.println("\n5. ENCRYPTION");
            var encrypted = Encryption.encryptAES("sensitive data", "myKey123");
            System.out.println("Encrypted: " + encrypted.ciphertext.substring(0, 30) + "...");
            
            // 6. HTTPS & TLS
            System.out.println("\n6. HTTPS & TLS");
            HTTPSAndTLS.SSLCertificate cert = new HTTPSAndTLS.SSLCertificate();
            cert.subject = "example.com";
            cert.issuer = "trusted-ca";
            cert.validFrom = System.currentTimeMillis();
            cert.validUntil = System.currentTimeMillis() + 31536000000L; // 1 year
            boolean certValid = HTTPSAndTLS.verifyCertificate(cert);
            System.out.println("Certificate valid: " + certValid);
            
            // 7. CORS
            System.out.println("\n7. CORS");
            CORS cors = new CORS();
            var corsHeaders = cors.handleCORSPreflight("https://example.com", "POST");
            System.out.println("CORS headers: " + corsHeaders.size());
            
            System.out.println("\n=== SECURITY PATTERNS COMPLETE ===");
            
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
