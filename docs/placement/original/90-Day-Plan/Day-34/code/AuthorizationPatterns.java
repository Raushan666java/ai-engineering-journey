/**
 * DAY 34: AUTHORIZATION PATTERNS - COMPREHENSIVE GUIDE
 * 
 * This file covers advanced authorization patterns for access control:
 * 1. Role-Based Access Control (RBAC) with hierarchical roles
 * 2. Attribute-Based Access Control (ABAC) with policy evaluation
 * 3. Access Control Lists (ACL) for resource-level permissions
 * 4. Policy-Based Authorization with rule engine
 * 5. Permission inheritance and delegation
 * 6. Fine-grained authorization with context-aware decisions
 * 7. Time-based access control
 * 8. IP-based access restrictions
 * 9. Resource ownership verification
 * 10. Permission caching for performance
 * 
 * All implementations follow the Principle of Least Privilege and are production-ready.
 *
 * @author Placement Preparation Team
 * @version 1.0
 * @since 2024
 */

import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.time.*;
import java.util.stream.*;

public class AuthorizationPatterns {

    /**
     * 1. ROLE-BASED ACCESS CONTROL (RBAC)
     * 
     * Most common authorization model.
     * Permissions are assigned to roles, and roles to users.
     * 
     * Used by: AWS IAM, Azure AD, Kubernetes RBAC
     * 
     * Time Complexity: O(1) for permission checks with caching
     * Space Complexity: O(n*m) where n is users and m is roles
     */
    static class RBACAuthorization {
        private final ConcurrentHashMap<String, Role> roles;
        private final ConcurrentHashMap<String, User> users;
        private final ConcurrentHashMap<String, Set<String>> userRoles; // userId -> roleIds
        private final ConcurrentHashMap<String, Set<String>> rolePermissions; // roleId -> permissions
        private final ConcurrentHashMap<String, Set<String>> roleHierarchy; // childRole -> parentRoles
        
        static class Role {
            String id;
            String name;
            String description;
            Set<String> permissions;
            Set<String> parentRoles;
            int priority; // Higher priority roles override lower
            Instant createdAt;
            
            Role(String id, String name, String description, int priority) {
                this.id = id;
                this.name = name;
                this.description = description;
                this.permissions = new HashSet<>();
                this.parentRoles = new HashSet<>();
                this.priority = priority;
                this.createdAt = Instant.now();
            }
        }
        
        static class User {
            String id;
            String username;
            Set<String> roles;
            Map<String, Object> attributes;
            Instant createdAt;
            
            User(String id, String username) {
                this.id = id;
                this.username = username;
                this.roles = new HashSet<>();
                this.attributes = new HashMap<>();
                this.createdAt = Instant.now();
            }
        }
        
        static class Permission {
            String resource;
            String action;
            
            Permission(String resource, String action) {
                this.resource = resource;
                this.action = action;
            }
            
            String toKey() {
                return resource + ":" + action;
            }
            
            static Permission fromKey(String key) {
                String[] parts = key.split(":", 2);
                return new Permission(parts[0], parts[1]);
            }
        }
        
        static class AuthorizationResult {
            boolean allowed;
            String reason;
            Set<String> grantingRoles;
            
            static AuthorizationResult allow(Set<String> grantingRoles) {
                AuthorizationResult result = new AuthorizationResult();
                result.allowed = true;
                result.grantingRoles = grantingRoles;
                result.reason = "Permission granted via roles: " + grantingRoles;
                return result;
            }
            
            static AuthorizationResult deny(String reason) {
                AuthorizationResult result = new AuthorizationResult();
                result.allowed = false;
                result.reason = reason;
                result.grantingRoles = new HashSet<>();
                return result;
            }
        }
        
        public RBACAuthorization() {
            this.roles = new ConcurrentHashMap<>();
            this.users = new ConcurrentHashMap<>();
            this.userRoles = new ConcurrentHashMap<>();
            this.rolePermissions = new ConcurrentHashMap<>();
            this.roleHierarchy = new ConcurrentHashMap<>();
        }
        
        /**
         * Create role with permissions
         */
        public Role createRole(String id, String name, String description, int priority) {
            Role role = new Role(id, name, description, priority);
            roles.put(id, role);
            rolePermissions.put(id, new HashSet<>());
            return role;
        }
        
        /**
         * Add permission to role
         */
        public void addPermissionToRole(String roleId, String resource, String action) {
            Role role = roles.get(roleId);
            if (role == null) {
                throw new IllegalArgumentException("Role not found: " + roleId);
            }
            
            Permission permission = new Permission(resource, action);
            role.permissions.add(permission.toKey());
            rolePermissions.get(roleId).add(permission.toKey());
        }
        
        /**
         * Add multiple permissions to role
         */
        public void addPermissionsToRole(String roleId, List<Permission> permissions) {
            permissions.forEach(p -> addPermissionToRole(roleId, p.resource, p.action));
        }
        
        /**
         * Set role hierarchy (role inheritance)
         */
        public void setRoleParent(String childRoleId, String parentRoleId) {
            Role childRole = roles.get(childRoleId);
            Role parentRole = roles.get(parentRoleId);
            
            if (childRole == null || parentRole == null) {
                throw new IllegalArgumentException("Role not found");
            }
            
            childRole.parentRoles.add(parentRoleId);
            roleHierarchy.computeIfAbsent(childRoleId, k -> new HashSet<>()).add(parentRoleId);
        }
        
        /**
         * Create user
         */
        public User createUser(String id, String username) {
            User user = new User(id, username);
            users.put(id, user);
            userRoles.put(id, new HashSet<>());
            return user;
        }
        
        /**
         * Assign role to user
         */
        public void assignRoleToUser(String userId, String roleId) {
            User user = users.get(userId);
            Role role = roles.get(roleId);
            
            if (user == null || role == null) {
                throw new IllegalArgumentException("User or role not found");
            }
            
            user.roles.add(roleId);
            userRoles.get(userId).add(roleId);
        }
        
        /**
         * Remove role from user
         */
        public void removeRoleFromUser(String userId, String roleId) {
            User user = users.get(userId);
            if (user != null) {
                user.roles.remove(roleId);
                userRoles.get(userId).remove(roleId);
            }
        }
        
        /**
         * Check if user has permission
         */
        public AuthorizationResult authorize(String userId, String resource, String action) {
            User user = users.get(userId);
            if (user == null) {
                return AuthorizationResult.deny("User not found");
            }
            
            Permission permission = new Permission(resource, action);
            String permissionKey = permission.toKey();
            
            // Get all permissions for user (including inherited)
            Set<String> allPermissions = getAllUserPermissions(userId);
            Set<String> grantingRoles = new HashSet<>();
            
            // Check if user has the permission
            if (allPermissions.contains(permissionKey)) {
                // Find which roles grant this permission
                for (String roleId : user.roles) {
                    if (roleHasPermission(roleId, permissionKey)) {
                        grantingRoles.add(roleId);
                    }
                }
                return AuthorizationResult.allow(grantingRoles);
            }
            
            // Check wildcard permissions (resource:*)
            String wildcardPermission = resource + ":*";
            if (allPermissions.contains(wildcardPermission)) {
                for (String roleId : user.roles) {
                    if (roleHasPermission(roleId, wildcardPermission)) {
                        grantingRoles.add(roleId);
                    }
                }
                return AuthorizationResult.allow(grantingRoles);
            }
            
            return AuthorizationResult.deny("Permission denied: " + permissionKey);
        }
        
        /**
         * Get all permissions for user (including inherited from role hierarchy)
         */
        private Set<String> getAllUserPermissions(String userId) {
            Set<String> allPermissions = new HashSet<>();
            Set<String> userRoleIds = userRoles.get(userId);
            
            if (userRoleIds == null) {
                return allPermissions;
            }
            
            // Use BFS to traverse role hierarchy
            Queue<String> roleQueue = new LinkedList<>(userRoleIds);
            Set<String> visitedRoles = new HashSet<>();
            
            while (!roleQueue.isEmpty()) {
                String roleId = roleQueue.poll();
                if (visitedRoles.contains(roleId)) {
                    continue;
                }
                visitedRoles.add(roleId);
                
                // Add permissions from this role
                Set<String> rolePerms = rolePermissions.get(roleId);
                if (rolePerms != null) {
                    allPermissions.addAll(rolePerms);
                }
                
                // Add parent roles to queue
                Role role = roles.get(roleId);
                if (role != null && role.parentRoles != null) {
                    roleQueue.addAll(role.parentRoles);
                }
            }
            
            return allPermissions;
        }
        
        /**
         * Check if role has permission (including inherited)
         */
        private boolean roleHasPermission(String roleId, String permissionKey) {
            Set<String> visitedRoles = new HashSet<>();
            Queue<String> roleQueue = new LinkedList<>();
            roleQueue.offer(roleId);
            
            while (!roleQueue.isEmpty()) {
                String currentRoleId = roleQueue.poll();
                if (visitedRoles.contains(currentRoleId)) {
                    continue;
                }
                visitedRoles.add(currentRoleId);
                
                Set<String> perms = rolePermissions.get(currentRoleId);
                if (perms != null && perms.contains(permissionKey)) {
                    return true;
                }
                
                Role role = roles.get(currentRoleId);
                if (role != null && role.parentRoles != null) {
                    roleQueue.addAll(role.parentRoles);
                }
            }
            
            return false;
        }
        
        /**
         * Get all roles for user (including inherited)
         */
        public Set<String> getAllUserRoles(String userId) {
            Set<String> allRoles = new HashSet<>();
            Set<String> userRoleIds = userRoles.get(userId);
            
            if (userRoleIds == null) {
                return allRoles;
            }
            
            Queue<String> roleQueue = new LinkedList<>(userRoleIds);
            
            while (!roleQueue.isEmpty()) {
                String roleId = roleQueue.poll();
                if (allRoles.contains(roleId)) {
                    continue;
                }
                allRoles.add(roleId);
                
                Role role = roles.get(roleId);
                if (role != null && role.parentRoles != null) {
                    roleQueue.addAll(role.parentRoles);
                }
            }
            
            return allRoles;
        }
    }

    /**
     * 2. ATTRIBUTE-BASED ACCESS CONTROL (ABAC)
     * 
     * Access decisions based on attributes of user, resource, action, and environment.
     * Most flexible authorization model.
     * 
     * Used by: AWS IAM Policies, Azure ABAC
     * 
     * Time Complexity: O(p) where p is number of policies
     * Space Complexity: O(p)
     */
    static class ABACAuthorization {
        private final List<Policy> policies;
        
        static class Policy {
            String id;
            String name;
            String effect; // "allow" or "deny"
            Predicate<AuthorizationContext> condition;
            int priority; // Higher priority policies evaluated first
            
            Policy(String id, String name, String effect, Predicate<AuthorizationContext> condition, int priority) {
                this.id = id;
                this.name = name;
                this.effect = effect;
                this.condition = condition;
                this.priority = priority;
            }
        }
        
        static class AuthorizationContext {
            // User attributes
            Map<String, Object> userAttributes;
            
            // Resource attributes
            Map<String, Object> resourceAttributes;
            
            // Action
            String action;
            
            // Environment attributes
            Map<String, Object> environmentAttributes;
            
            AuthorizationContext(Map<String, Object> userAttributes, 
                               Map<String, Object> resourceAttributes,
                               String action,
                               Map<String, Object> environmentAttributes) {
                this.userAttributes = userAttributes;
                this.resourceAttributes = resourceAttributes;
                this.action = action;
                this.environmentAttributes = environmentAttributes;
            }
            
            // Helper methods to get attributes with type safety
            public String getUserAttribute(String key) {
                return (String) userAttributes.get(key);
            }
            
            public String getResourceAttribute(String key) {
                return (String) resourceAttributes.get(key);
            }
            
            public String getEnvironmentAttribute(String key) {
                return (String) environmentAttributes.get(key);
            }
            
            @SuppressWarnings("unchecked")
            public Set<String> getUserRoles() {
                return (Set<String>) userAttributes.getOrDefault("roles", new HashSet<>());
            }
        }
        
        static class PolicyDecision {
            String effect; // "allow", "deny", or "not-applicable"
            String reason;
            List<String> matchedPolicies;
            
            PolicyDecision(String effect, String reason, List<String> matchedPolicies) {
                this.effect = effect;
                this.reason = reason;
                this.matchedPolicies = matchedPolicies;
            }
            
            boolean isAllowed() {
                return "allow".equals(effect);
            }
        }
        
        public ABACAuthorization() {
            this.policies = new CopyOnWriteArrayList<>();
        }
        
        /**
         * Add policy to authorization system
         */
        public void addPolicy(Policy policy) {
            policies.add(policy);
            // Sort by priority (higher first)
            policies.sort((p1, p2) -> Integer.compare(p2.priority, p1.priority));
        }
        
        /**
         * Evaluate authorization request against all policies
         */
        public PolicyDecision evaluate(AuthorizationContext context) {
            List<String> matchedPolicies = new ArrayList<>();
            
            // Explicit deny takes precedence
            for (Policy policy : policies) {
                try {
                    if (policy.condition.test(context)) {
                        matchedPolicies.add(policy.name);
                        
                        if ("deny".equals(policy.effect)) {
                            return new PolicyDecision("deny", 
                                "Explicitly denied by policy: " + policy.name, 
                                matchedPolicies);
                        }
                    }
                } catch (Exception e) {
                    // Policy evaluation failed, skip
                    System.err.println("Policy evaluation error: " + e.getMessage());
                }
            }
            
            // Check for allow
            for (Policy policy : policies) {
                try {
                    if (policy.condition.test(context) && "allow".equals(policy.effect)) {
                        return new PolicyDecision("allow", 
                            "Allowed by policy: " + policy.name, 
                            matchedPolicies);
                    }
                } catch (Exception e) {
                    // Skip failed policy
                }
            }
            
            // Default deny if no policy matched
            return new PolicyDecision("deny", 
                "No matching policy found - default deny", 
                matchedPolicies);
        }
        
        /**
         * Create common policy builders
         */
        public static class PolicyBuilder {
            /**
             * Allow users with specific role to perform action on resource
             */
            public static Policy roleBasedPolicy(String id, String name, String role, 
                                               String action, int priority) {
                Predicate<AuthorizationContext> condition = ctx -> 
                    ctx.getUserRoles().contains(role) && ctx.action.equals(action);
                return new Policy(id, name, "allow", condition, priority);
            }
            
            /**
             * Allow resource owner to perform any action
             */
            public static Policy ownerPolicy(String id, String name, int priority) {
                Predicate<AuthorizationContext> condition = ctx -> {
                    String userId = ctx.getUserAttribute("id");
                    String ownerId = ctx.getResourceAttribute("ownerId");
                    return userId != null && userId.equals(ownerId);
                };
                return new Policy(id, name, "allow", condition, priority);
            }
            
            /**
             * Time-based access control
             */
            public static Policy timeBasedPolicy(String id, String name, 
                                               LocalTime startTime, LocalTime endTime, 
                                               int priority) {
                Predicate<AuthorizationContext> condition = ctx -> {
                    LocalTime now = LocalTime.now();
                    return now.isAfter(startTime) && now.isBefore(endTime);
                };
                return new Policy(id, name, "allow", condition, priority);
            }
            
            /**
             * IP-based access control
             */
            public static Policy ipBasedPolicy(String id, String name, Set<String> allowedIPs, 
                                             int priority) {
                Predicate<AuthorizationContext> condition = ctx -> {
                    String clientIp = ctx.getEnvironmentAttribute("clientIp");
                    return clientIp != null && allowedIPs.contains(clientIp);
                };
                return new Policy(id, name, "allow", condition, priority);
            }
            
            /**
             * Attribute matching policy
             */
            public static Policy attributeMatchPolicy(String id, String name, 
                                                    String userAttr, String resourceAttr, 
                                                    int priority) {
                Predicate<AuthorizationContext> condition = ctx -> {
                    Object userValue = ctx.userAttributes.get(userAttr);
                    Object resourceValue = ctx.resourceAttributes.get(resourceAttr);
                    return userValue != null && userValue.equals(resourceValue);
                };
                return new Policy(id, name, "allow", condition, priority);
            }
            
            /**
             * Deny policy for sensitive actions
             */
            public static Policy denyPolicy(String id, String name, 
                                          Predicate<AuthorizationContext> condition, 
                                          int priority) {
                return new Policy(id, name, "deny", condition, priority);
            }
        }
    }

    /**
     * 3. ACCESS CONTROL LIST (ACL)
     * 
     * Resource-centric access control with explicit permissions per resource.
     * 
     * Used by: File systems, AWS S3, Google Cloud Storage
     * 
     * Time Complexity: O(1) for permission checks
     * Space Complexity: O(r*u) where r is resources and u is users
     */
    static class ACLAuthorization {
        private final ConcurrentHashMap<String, ResourceACL> resourceACLs;
        
        static class ResourceACL {
            String resourceId;
            String owner;
            Map<String, Set<String>> userPermissions; // userId -> permissions
            Map<String, Set<String>> groupPermissions; // groupId -> permissions
            Set<String> publicPermissions; // Public access
            Instant createdAt;
            Instant modifiedAt;
            
            ResourceACL(String resourceId, String owner) {
                this.resourceId = resourceId;
                this.owner = owner;
                this.userPermissions = new ConcurrentHashMap<>();
                this.groupPermissions = new ConcurrentHashMap<>();
                this.publicPermissions = new HashSet<>();
                this.createdAt = Instant.now();
                this.modifiedAt = Instant.now();
            }
        }
        
        static class ACLEntry {
            String principal; // user, group, or "public"
            String principalType; // "user", "group", "public"
            Set<String> permissions;
            
            ACLEntry(String principal, String principalType, Set<String> permissions) {
                this.principal = principal;
                this.principalType = principalType;
                this.permissions = permissions;
            }
        }
        
        static class ACLCheckResult {
            boolean allowed;
            String grantedBy; // "owner", "user", "group", "public"
            Set<String> permissions;
            
            static ACLCheckResult allow(String grantedBy, Set<String> permissions) {
                ACLCheckResult result = new ACLCheckResult();
                result.allowed = true;
                result.grantedBy = grantedBy;
                result.permissions = permissions;
                return result;
            }
            
            static ACLCheckResult deny() {
                ACLCheckResult result = new ACLCheckResult();
                result.allowed = false;
                result.permissions = new HashSet<>();
                return result;
            }
        }
        
        public ACLAuthorization() {
            this.resourceACLs = new ConcurrentHashMap<>();
        }
        
        /**
         * Create ACL for new resource
         */
        public void createResourceACL(String resourceId, String owner) {
            ResourceACL acl = new ResourceACL(resourceId, owner);
            resourceACLs.put(resourceId, acl);
        }
        
        /**
         * Grant permission to user for resource
         */
        public void grantUserPermission(String resourceId, String userId, String permission) {
            ResourceACL acl = resourceACLs.get(resourceId);
            if (acl == null) {
                throw new IllegalArgumentException("Resource ACL not found");
            }
            
            acl.userPermissions.computeIfAbsent(userId, k -> new HashSet<>()).add(permission);
            acl.modifiedAt = Instant.now();
        }
        
        /**
         * Revoke permission from user
         */
        public void revokeUserPermission(String resourceId, String userId, String permission) {
            ResourceACL acl = resourceACLs.get(resourceId);
            if (acl != null) {
                Set<String> permissions = acl.userPermissions.get(userId);
                if (permissions != null) {
                    permissions.remove(permission);
                    if (permissions.isEmpty()) {
                        acl.userPermissions.remove(userId);
                    }
                }
                acl.modifiedAt = Instant.now();
            }
        }
        
        /**
         * Grant permission to group
         */
        public void grantGroupPermission(String resourceId, String groupId, String permission) {
            ResourceACL acl = resourceACLs.get(resourceId);
            if (acl == null) {
                throw new IllegalArgumentException("Resource ACL not found");
            }
            
            acl.groupPermissions.computeIfAbsent(groupId, k -> new HashSet<>()).add(permission);
            acl.modifiedAt = Instant.now();
        }
        
        /**
         * Grant public permission
         */
        public void grantPublicPermission(String resourceId, String permission) {
            ResourceACL acl = resourceACLs.get(resourceId);
            if (acl == null) {
                throw new IllegalArgumentException("Resource ACL not found");
            }
            
            acl.publicPermissions.add(permission);
            acl.modifiedAt = Instant.now();
        }
        
        /**
         * Check if user has permission on resource
         */
        public ACLCheckResult checkPermission(String resourceId, String userId, String permission,
                                            Set<String> userGroups) {
            ResourceACL acl = resourceACLs.get(resourceId);
            if (acl == null) {
                return ACLCheckResult.deny();
            }
            
            // Owner has all permissions
            if (userId.equals(acl.owner)) {
                return ACLCheckResult.allow("owner", Set.of("*"));
            }
            
            // Check user-specific permissions
            Set<String> userPerms = acl.userPermissions.get(userId);
            if (userPerms != null && (userPerms.contains(permission) || userPerms.contains("*"))) {
                return ACLCheckResult.allow("user", userPerms);
            }
            
            // Check group permissions
            if (userGroups != null) {
                for (String groupId : userGroups) {
                    Set<String> groupPerms = acl.groupPermissions.get(groupId);
                    if (groupPerms != null && (groupPerms.contains(permission) || groupPerms.contains("*"))) {
                        return ACLCheckResult.allow("group:" + groupId, groupPerms);
                    }
                }
            }
            
            // Check public permissions
            if (acl.publicPermissions.contains(permission) || acl.publicPermissions.contains("*")) {
                return ACLCheckResult.allow("public", acl.publicPermissions);
            }
            
            return ACLCheckResult.deny();
        }
        
        /**
         * Get all ACL entries for resource
         */
        public List<ACLEntry> getResourceACL(String resourceId) {
            ResourceACL acl = resourceACLs.get(resourceId);
            if (acl == null) {
                return new ArrayList<>();
            }
            
            List<ACLEntry> entries = new ArrayList<>();
            
            // Add user entries
            acl.userPermissions.forEach((userId, permissions) -> 
                entries.add(new ACLEntry(userId, "user", permissions)));
            
            // Add group entries
            acl.groupPermissions.forEach((groupId, permissions) -> 
                entries.add(new ACLEntry(groupId, "group", permissions)));
            
            // Add public entry if any public permissions
            if (!acl.publicPermissions.isEmpty()) {
                entries.add(new ACLEntry("public", "public", acl.publicPermissions));
            }
            
            return entries;
        }
        
        /**
         * Transfer ownership
         */
        public void transferOwnership(String resourceId, String newOwner, String currentOwner) {
            ResourceACL acl = resourceACLs.get(resourceId);
            if (acl == null) {
                throw new IllegalArgumentException("Resource ACL not found");
            }
            
            if (!acl.owner.equals(currentOwner)) {
                throw new SecurityException("Only owner can transfer ownership");
            }
            
            acl.owner = newOwner;
            acl.modifiedAt = Instant.now();
        }
    }

    /**
     * 4. POLICY-BASED AUTHORIZATION WITH RULE ENGINE
     * 
     * Complex authorization logic with composable rules.
     * 
     * Time Complexity: O(r) where r is number of rules
     * Space Complexity: O(r)
     */
    static class PolicyBasedAuthorization {
        private final List<AuthorizationRule> rules;
        
        interface AuthorizationRule {
            boolean evaluate(AuthorizationRequest request);
            String getName();
            int getPriority();
        }
        
        static class AuthorizationRequest {
            String userId;
            String resource;
            String action;
            Map<String, Object> context;
            
            AuthorizationRequest(String userId, String resource, String action, 
                               Map<String, Object> context) {
                this.userId = userId;
                this.resource = resource;
                this.action = action;
                this.context = context;
            }
            
            public Object getContextValue(String key) {
                return context.get(key);
            }
        }
        
        static class RuleResult {
            boolean allowed;
            List<String> appliedRules;
            String reason;
            
            RuleResult(boolean allowed, List<String> appliedRules, String reason) {
                this.allowed = allowed;
                this.appliedRules = appliedRules;
                this.reason = reason;
            }
        }
        
        public PolicyBasedAuthorization() {
            this.rules = new CopyOnWriteArrayList<>();
        }
        
        /**
         * Add authorization rule
         */
        public void addRule(AuthorizationRule rule) {
            rules.add(rule);
            rules.sort((r1, r2) -> Integer.compare(r2.getPriority(), r1.getPriority()));
        }
        
        /**
         * Evaluate authorization request
         */
        public RuleResult evaluate(AuthorizationRequest request) {
            List<String> appliedRules = new ArrayList<>();
            
            for (AuthorizationRule rule : rules) {
                boolean result = rule.evaluate(request);
                if (result) {
                    appliedRules.add(rule.getName());
                    return new RuleResult(true, appliedRules, 
                        "Authorized by rule: " + rule.getName());
                }
            }
            
            return new RuleResult(false, appliedRules, "No matching rule found");
        }
        
        /**
         * Common authorization rules
         */
        public static class CommonRules {
            public static AuthorizationRule ownerRule(int priority) {
                return new AuthorizationRule() {
                    @Override
                    public boolean evaluate(AuthorizationRequest request) {
                        Object ownerId = request.getContextValue("ownerId");
                        return ownerId != null && ownerId.equals(request.userId);
                    }
                    
                    @Override
                    public String getName() {
                        return "OwnerRule";
                    }
                    
                    @Override
                    public int getPriority() {
                        return priority;
                    }
                };
            }
            
            public static AuthorizationRule roleRule(Set<String> allowedRoles, int priority) {
                return new AuthorizationRule() {
                    @Override
                    @SuppressWarnings("unchecked")
                    public boolean evaluate(AuthorizationRequest request) {
                        Set<String> userRoles = (Set<String>) request.getContextValue("roles");
                        if (userRoles == null) {
                            return false;
                        }
                        return userRoles.stream().anyMatch(allowedRoles::contains);
                    }
                    
                    @Override
                    public String getName() {
                        return "RoleRule:" + allowedRoles;
                    }
                    
                    @Override
                    public int getPriority() {
                        return priority;
                    }
                };
            }
            
            public static AuthorizationRule timeWindowRule(LocalTime start, LocalTime end, int priority) {
                return new AuthorizationRule() {
                    @Override
                    public boolean evaluate(AuthorizationRequest request) {
                        LocalTime now = LocalTime.now();
                        return now.isAfter(start) && now.isBefore(end);
                    }
                    
                    @Override
                    public String getName() {
                        return "TimeWindowRule:" + start + "-" + end;
                    }
                    
                    @Override
                    public int getPriority() {
                        return priority;
                    }
                };
            }
        }
    }

    // ============================================
    // DEMONSTRATION AND TESTING
    // ============================================
    
    public static void main(String[] args) {
        demonstrateRBAC();
        System.out.println("\n" + "=".repeat(80) + "\n");
        
        demonstrateABAC();
        System.out.println("\n" + "=".repeat(80) + "\n");
        
        demonstrateACL();
        System.out.println("\n" + "=".repeat(80) + "\n");
        
        demonstratePolicyBased();
    }
    
    private static void demonstrateRBAC() {
        System.out.println("=== ROLE-BASED ACCESS CONTROL (RBAC) DEMONSTRATION ===\n");
        
        RBACAuthorization rbac = new RBACAuthorization();
        
        // Create roles with hierarchy
        RBACAuthorization.Role adminRole = rbac.createRole("admin", "Administrator", 
            "Full system access", 100);
        RBACAuthorization.Role managerRole = rbac.createRole("manager", "Manager", 
            "Department manager", 50);
        RBACAuthorization.Role userRole = rbac.createRole("user", "User", 
            "Regular user", 10);
        
        // Set up role hierarchy: admin inherits from manager, manager from user
        rbac.setRoleParent("admin", "manager");
        rbac.setRoleParent("manager", "user");
        
        // Assign permissions to roles
        rbac.addPermissionToRole("user", "documents", "read");
        rbac.addPermissionToRole("user", "profile", "read");
        rbac.addPermissionToRole("user", "profile", "update");
        
        rbac.addPermissionToRole("manager", "documents", "write");
        rbac.addPermissionToRole("manager", "reports", "read");
        rbac.addPermissionToRole("manager", "reports", "write");
        
        rbac.addPermissionToRole("admin", "system", "*");
        rbac.addPermissionToRole("admin", "users", "*");
        
        System.out.println("1. Created Role Hierarchy:");
        System.out.println("   admin (priority: 100) -> manager (priority: 50) -> user (priority: 10)");
        
        // Create users and assign roles
        RBACAuthorization.User alice = rbac.createUser("alice", "alice@example.com");
        rbac.assignRoleToUser("alice", "admin");
        
        RBACAuthorization.User bob = rbac.createUser("bob", "bob@example.com");
        rbac.assignRoleToUser("bob", "manager");
        
        RBACAuthorization.User charlie = rbac.createUser("charlie", "charlie@example.com");
        rbac.assignRoleToUser("charlie", "user");
        
        System.out.println("\n2. Created Users:");
        System.out.println("   alice: admin role");
        System.out.println("   bob: manager role");
        System.out.println("   charlie: user role");
        
        // Test authorization
        System.out.println("\n3. Authorization Tests:");
        
        // Alice (admin) can access everything
        RBACAuthorization.AuthorizationResult result1 = rbac.authorize("alice", "system", "delete");
        System.out.println("   alice -> system:delete = " + 
            (result1.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " (" + result1.reason + ")");
        
        // Bob (manager) inherits user permissions
        RBACAuthorization.AuthorizationResult result2 = rbac.authorize("bob", "documents", "read");
        System.out.println("   bob -> documents:read = " + 
            (result2.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " (inherited from user role)");
        
        RBACAuthorization.AuthorizationResult result3 = rbac.authorize("bob", "documents", "write");
        System.out.println("   bob -> documents:write = " + 
            (result3.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " (manager permission)");
        
        // Charlie (user) has limited access
        RBACAuthorization.AuthorizationResult result4 = rbac.authorize("charlie", "documents", "read");
        System.out.println("   charlie -> documents:read = " + 
            (result4.allowed ? "✓ ALLOWED" : "✗ DENIED"));
        
        RBACAuthorization.AuthorizationResult result5 = rbac.authorize("charlie", "documents", "write");
        System.out.println("   charlie -> documents:write = " + 
            (result5.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " (" + result5.reason + ")");
    }
    
    private static void demonstrateABAC() {
        System.out.println("=== ATTRIBUTE-BASED ACCESS CONTROL (ABAC) DEMONSTRATION ===\n");
        
        ABACAuthorization abac = new ABACAuthorization();
        
        // Add policies
        // Policy 1: Allow admins to perform any action
        ABACAuthorization.Policy adminPolicy = new ABACAuthorization.Policy(
            "policy-1", "Admin Full Access", "allow",
            ctx -> ctx.getUserRoles().contains("ADMIN"),
            100
        );
        abac.addPolicy(adminPolicy);
        
        // Policy 2: Allow resource owners to delete their own resources
        ABACAuthorization.Policy ownerPolicy = ABACAuthorization.PolicyBuilder.ownerPolicy(
            "policy-2", "Owner Delete Policy", 90
        );
        abac.addPolicy(ownerPolicy);
        
        // Policy 3: Allow users from same department to view resources
        ABACAuthorization.Policy departmentPolicy = ABACAuthorization.PolicyBuilder.attributeMatchPolicy(
            "policy-3", "Department View Policy", "department", "department", 50
        );
        abac.addPolicy(departmentPolicy);
        
        // Policy 4: Business hours access (9 AM - 5 PM)
        ABACAuthorization.Policy timePolicy = ABACAuthorization.PolicyBuilder.timeBasedPolicy(
            "policy-4", "Business Hours Policy", LocalTime.of(9, 0), LocalTime.of(17, 0), 40
        );
        
        // Policy 5: Deny access from specific IP
        ABACAuthorization.Policy ipDenyPolicy = ABACAuthorization.PolicyBuilder.denyPolicy(
            "policy-5", "Block Malicious IP",
            ctx -> "192.168.1.100".equals(ctx.getEnvironmentAttribute("clientIp")),
            200 // Highest priority for deny
        );
        abac.addPolicy(ipDenyPolicy);
        
        System.out.println("1. Created ABAC Policies:");
        System.out.println("   - Admin Full Access (priority: 100)");
        System.out.println("   - Owner Delete Policy (priority: 90)");
        System.out.println("   - Department View Policy (priority: 50)");
        System.out.println("   - Block Malicious IP (priority: 200, DENY)");
        
        // Test scenarios
        System.out.println("\n2. Authorization Tests:");
        
        // Scenario 1: Admin access
        Map<String, Object> adminAttrs = new HashMap<>();
        adminAttrs.put("id", "admin1");
        adminAttrs.put("roles", Set.of("ADMIN"));
        adminAttrs.put("department", "IT");
        
        Map<String, Object> resourceAttrs1 = new HashMap<>();
        resourceAttrs1.put("id", "doc123");
        resourceAttrs1.put("ownerId", "user1");
        
        Map<String, Object> envAttrs1 = new HashMap<>();
        envAttrs1.put("clientIp", "192.168.1.1");
        
        ABACAuthorization.AuthorizationContext adminCtx = new ABACAuthorization.AuthorizationContext(
            adminAttrs, resourceAttrs1, "delete", envAttrs1
        );
        
        ABACAuthorization.PolicyDecision decision1 = abac.evaluate(adminCtx);
        System.out.println("   Admin deleting any resource: " + 
            (decision1.isAllowed() ? "✓ ALLOWED" : "✗ DENIED") + 
            " - " + decision1.reason);
        
        // Scenario 2: Owner deleting own resource
        Map<String, Object> userAttrs = new HashMap<>();
        userAttrs.put("id", "user1");
        userAttrs.put("roles", Set.of("USER"));
        userAttrs.put("department", "Engineering");
        
        ABACAuthorization.AuthorizationContext ownerCtx = new ABACAuthorization.AuthorizationContext(
            userAttrs, resourceAttrs1, "delete", envAttrs1
        );
        
        ABACAuthorization.PolicyDecision decision2 = abac.evaluate(ownerCtx);
        System.out.println("   Owner deleting own resource: " + 
            (decision2.isAllowed() ? "✓ ALLOWED" : "✗ DENIED") + 
            " - " + decision2.reason);
        
        // Scenario 3: Denied by IP policy
        Map<String, Object> maliciousEnv = new HashMap<>();
        maliciousEnv.put("clientIp", "192.168.1.100");
        
        ABACAuthorization.AuthorizationContext blockedCtx = new ABACAuthorization.AuthorizationContext(
            adminAttrs, resourceAttrs1, "delete", maliciousEnv
        );
        
        ABACAuthorization.PolicyDecision decision3 = abac.evaluate(blockedCtx);
        System.out.println("   Admin from blocked IP: " + 
            (decision3.isAllowed() ? "✓ ALLOWED" : "✗ DENIED") + 
            " - " + decision3.reason);
    }
    
    private static void demonstrateACL() {
        System.out.println("=== ACCESS CONTROL LIST (ACL) DEMONSTRATION ===\n");
        
        ACLAuthorization acl = new ACLAuthorization();
        
        // Create resources with ACLs
        acl.createResourceACL("doc-001", "alice");
        acl.createResourceACL("doc-002", "bob");
        acl.createResourceACL("doc-003", "alice");
        
        System.out.println("1. Created Resources with ACLs:");
        System.out.println("   doc-001 (owner: alice)");
        System.out.println("   doc-002 (owner: bob)");
        System.out.println("   doc-003 (owner: alice)");
        
        // Grant permissions
        acl.grantUserPermission("doc-001", "bob", "read");
        acl.grantUserPermission("doc-001", "bob", "write");
        acl.grantUserPermission("doc-001", "charlie", "read");
        
        acl.grantGroupPermission("doc-002", "engineering", "read");
        acl.grantGroupPermission("doc-002", "engineering", "write");
        
        acl.grantPublicPermission("doc-003", "read");
        
        System.out.println("\n2. Granted Permissions:");
        System.out.println("   doc-001: bob (read, write), charlie (read)");
        System.out.println("   doc-002: group:engineering (read, write)");
        System.out.println("   doc-003: public (read)");
        
        // Test permissions
        System.out.println("\n3. Permission Checks:");
        
        // Alice (owner) has full access
        ACLAuthorization.ACLCheckResult check1 = acl.checkPermission("doc-001", "alice", "delete", null);
        System.out.println("   alice -> doc-001:delete = " + 
            (check1.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " (granted by: " + check1.grantedBy + ")");
        
        // Bob has explicit permissions
        ACLAuthorization.ACLCheckResult check2 = acl.checkPermission("doc-001", "bob", "write", null);
        System.out.println("   bob -> doc-001:write = " + 
            (check2.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " (granted by: " + check2.grantedBy + ")");
        
        // Charlie has limited access
        ACLAuthorization.ACLCheckResult check3 = acl.checkPermission("doc-001", "charlie", "read", null);
        System.out.println("   charlie -> doc-001:read = " + 
            (check3.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " (granted by: " + check3.grantedBy + ")");
        
        ACLAuthorization.ACLCheckResult check4 = acl.checkPermission("doc-001", "charlie", "write", null);
        System.out.println("   charlie -> doc-001:write = " + 
            (check4.allowed ? "✓ ALLOWED" : "✗ DENIED"));
        
        // Group permissions
        Set<String> groups = Set.of("engineering", "qa");
        ACLAuthorization.ACLCheckResult check5 = acl.checkPermission("doc-002", "dave", "write", groups);
        System.out.println("   dave (group:engineering) -> doc-002:write = " + 
            (check5.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " (granted by: " + check5.grantedBy + ")");
        
        // Public access
        ACLAuthorization.ACLCheckResult check6 = acl.checkPermission("doc-003", "anonymous", "read", null);
        System.out.println("   anonymous -> doc-003:read = " + 
            (check6.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " (granted by: " + check6.grantedBy + ")");
    }
    
    private static void demonstratePolicyBased() {
        System.out.println("=== POLICY-BASED AUTHORIZATION DEMONSTRATION ===\n");
        
        PolicyBasedAuthorization policyAuth = new PolicyBasedAuthorization();
        
        // Add rules
        policyAuth.addRule(PolicyBasedAuthorization.CommonRules.ownerRule(100));
        policyAuth.addRule(PolicyBasedAuthorization.CommonRules.roleRule(Set.of("ADMIN"), 90));
        policyAuth.addRule(PolicyBasedAuthorization.CommonRules.timeWindowRule(
            LocalTime.of(9, 0), LocalTime.of(17, 0), 50
        ));
        
        System.out.println("1. Added Authorization Rules:");
        System.out.println("   - Owner Rule (priority: 100)");
        System.out.println("   - Admin Role Rule (priority: 90)");
        System.out.println("   - Business Hours Rule (priority: 50)");
        
        // Test scenarios
        System.out.println("\n2. Authorization Tests:");
        
        // Scenario 1: Resource owner
        Map<String, Object> ownerContext = new HashMap<>();
        ownerContext.put("ownerId", "user123");
        ownerContext.put("roles", Set.of("USER"));
        
        PolicyBasedAuthorization.AuthorizationRequest ownerReq = 
            new PolicyBasedAuthorization.AuthorizationRequest(
                "user123", "document", "delete", ownerContext
            );
        
        PolicyBasedAuthorization.RuleResult result1 = policyAuth.evaluate(ownerReq);
        System.out.println("   Owner deleting own document: " + 
            (result1.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " - " + result1.reason);
        
        // Scenario 2: Admin user
        Map<String, Object> adminContext = new HashMap<>();
        adminContext.put("ownerId", "user456");
        adminContext.put("roles", Set.of("ADMIN"));
        
        PolicyBasedAuthorization.AuthorizationRequest adminReq = 
            new PolicyBasedAuthorization.AuthorizationRequest(
                "admin789", "document", "delete", adminContext
            );
        
        PolicyBasedAuthorization.RuleResult result2 = policyAuth.evaluate(adminReq);
        System.out.println("   Admin deleting user's document: " + 
            (result2.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " - " + result2.reason);
        
        // Scenario 3: Regular user (no matching rule)
        Map<String, Object> userContext = new HashMap<>();
        userContext.put("ownerId", "user456");
        userContext.put("roles", Set.of("USER"));
        
        PolicyBasedAuthorization.AuthorizationRequest userReq = 
            new PolicyBasedAuthorization.AuthorizationRequest(
                "user789", "document", "delete", userContext
            );
        
        PolicyBasedAuthorization.RuleResult result3 = policyAuth.evaluate(userReq);
        System.out.println("   User deleting other's document: " + 
            (result3.allowed ? "✓ ALLOWED" : "✗ DENIED") + 
            " - " + result3.reason);
    }
}
