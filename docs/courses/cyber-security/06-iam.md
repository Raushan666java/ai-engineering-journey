# Chapter 6: Identity & Access Management

---

## Learning Objectives

- Define the core concepts of Identity and Access Management (IAM).
- Compare different access control models: DAC, MAC, RBAC, and ABAC.
- Explain multi-factor authentication (MFA) and the strengths of various authentication factors.
- Understand the protocols used for modern identity services like OAuth 2.0 and SAML.
- Describe the risks associated with poor credential management and the benefits of federated identity.

---

## Theory

![IAM Access Control Models](https://raw.githubusercontent.com/AkashSingh3031/AI-Engineering-Journey/main/docs/assets/images/diagrams/cyber-security/ch06-iam-models.png)

### Core IAM Concepts
IAM is the security discipline that enables the right individuals to access the right resources at the right times for the right reasons.
- **Identity:** A unique representation of an entity (human, service, or device) within a system.
- **Authentication (AuthN):** The process of proving an identity.
- **Authorization (AuthZ):** The process of granting or denying access to resources.
- **Account Management:** The lifecycle of an identity, from creation (provisioning) to deletion (de-provisioning).

### Access Control Models
How authorization decisions are made and enforced:
- **Discretionary Access Control (DAC):** The owner of an object decides who has access (common in file systems).
- **Mandatory Access Control (MAC):** Access is based on system-wide security labels and clearances (used in high-security environments).
- **Role-Based Access Control (RBAC):** Permissions are assigned to roles, and users are assigned to those roles (standard in many organizations).
- **Attribute-Based Access Control (ABAC):** Access decisions are based on a combination of user, resource, and environmental attributes (e.g., "Allow access to 'File A' if 'User' is 'Manager' AND 'Time' is 'Business Hours'").

### Multi-Factor Authentication (MFA)
MFA requires two or more independent pieces of evidence (factors) for authentication.
- **Knowledge:** Something you know (Password, PIN).
- **Possession:** Something you have (Security token, SMS code, Authenticator app).
- **Inherence:** Something you are (Fingerprint, Face ID, Retina scan).
- **Location/Behavior:** Somewhere you are (GPS) or something you do (Typing pattern).

### Modern Authentication Protocols
- **SAML (Security Assertion Markup Language):** XML-based protocol for exchanging authentication and authorization data between an Identity Provider (IdP) and a Service Provider (SP). Commonly used for Enterprise Single Sign-On (SSO).
- **OAuth 2.0:** An authorization framework that allows applications to obtain limited access to user accounts on an HTTP service (e.g., "Log in with Google").
- **OpenID Connect (OIDC):** An identity layer built on top of the OAuth 2.0 protocol to verify the identity of the end-user.

---

## Examples

### Example 1: Implementing RBAC in a Database
A SQL schema for a basic RBAC system:
```sql
-- Create roles
CREATE TABLE roles (id INT PRIMARY KEY, name VARCHAR(50));
INSERT INTO roles VALUES (1, 'Admin'), (2, 'Editor'), (3, 'Viewer');

-- Assign users to roles
CREATE TABLE user_roles (user_id INT, role_id INT);
INSERT INTO user_roles (user_id, role_id) VALUES (101, 2); -- User 101 is an Editor

-- Check if user has permission (Conceptual)
-- SELECT count(*) FROM user_roles ur 
-- JOIN roles r ON ur.role_id = r.id 
-- WHERE ur.user_id = 101 AND r.name = 'Editor';
```
*Demonstrates the decoupling of users from direct permissions via roles.*

### Example 2: OAuth 2.0 Authorization Flow
Scenario: A user wants to use a "Photo Printing" app to print photos from their Google Photos account.
1.  **Request:** Photo App redirects the user to Google.
2.  **Consent:** Google asks the user, "Do you want to allow Photo App to view your photos?"
3.  **Token:** If the user agrees, Google sends an **Authorization Code** to the Photo App.
4.  **Exchange:** Photo App exchanges the code for an **Access Token**.
5.  **Access:** Photo App uses the Access Token to fetch the photos from Google.
*Demonstrates secure third-party access without sharing the user's password.*

---

## Summary

- IAM is fundamental to security, ensuring that only authorized entities can access sensitive resources.
- Access control models (DAC, MAC, RBAC, ABAC) provide different levels of granularity and administrative control.
- MFA significantly increases security by requiring multiple independent factors.
- Federated identity (via SAML, OIDC) allows for seamless SSO across different organizations and services.
- Proper account lifecycle management (provisioning and de-provisioning) is critical to prevent "orphaned accounts."

---

## Exercises

### Review Questions
1. Define the four primary access control models (DAC, MAC, RBAC, ABAC).
2. What are the three most common factors used in MFA?
3. Explain the difference between Authentication and Authorization using an analogy.
4. What is the main benefit of using a Federated Identity system?

### Application Problems
1. Design an ABAC policy for a corporate document system that restricts access to "Financial Reports" to only "Accounting Department" employees who are connecting from a "Corporate VPN" during "Standard Business Hours."
2. A company currently uses a single password for all its shared accounts. Propose a more secure IAM strategy for this organization.
3. Compare the security of SMS-based MFA versus Hardware Token (e.g., YubiKey) based MFA.

### Challenge Problem
1. Research the "Zero Trust Architecture" (ZTA). Explain how it changes the traditional approach to IAM and why the concept of "never trust, always verify" is becoming the industry standard. How does ZTA rely on many of the concepts discussed in this chapter?
