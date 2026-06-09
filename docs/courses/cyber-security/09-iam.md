# Identity and Access Management

## Learning Objectives

After completing this chapter, students will be able to differentiate authentication factors and select appropriate mechanisms, implement multi-factor authentication using TOTP and FIDO2, configure SSO with SAML and OAuth 2.0, administer LDAP directories, manage Active Directory security with Kerberos and Group Policy, design privileged access management strategies, implement role-based and attribute-based access control, and manage the identity lifecycle.

## Theory

### Authentication Methods

Authentication verifies identity through one or more factors. Knowledge factors include passwords and PINs. Possession factors include hardware tokens, smart cards, and mobile devices. Inherence factors are biometric characteristics (fingerprint, facial recognition, iris scan). Location factors verify geographic position. Behavioural factors analyse typing rhythm, mouse movements, and gait. Password authentication remains dominant despite well-documented weaknesses due to its simplicity and low cost.

### Password Security

Password strength is measured by entropy, determined by character set size and length. NIST SP 800-63B recommends minimum 8-character passwords, checking against known compromised passwords, and allowing spaces and Unicode characters. Password managers generate and store strong, unique passwords per service, reducing credential reuse risk. Account lockout after repeated failures mitigates online brute force attacks but introduces denial of service risk.

### Multi-Factor Authentication

MFA combines multiple authentication factors, significantly reducing compromise risk. Time-based One-Time Passwords (TOTP) generate 6-8 digit codes from a shared secret and current time, typically renewed every 30 seconds. HMAC-based One-Time Passwords (HOTP) are event-driven, incrementing a counter with each code generation. FIDO2 and WebAuthn use public-key cryptography for phishing-resistant authentication. The private key never leaves the user's device. Universal 2nd Factor (U2F) hardware tokens provide similar protection. SMS-based codes are increasingly discouraged due to SIM-swapping attacks.

### Single Sign-On

SSO allows users to authenticate once and access multiple applications. Security Assertion Markup Language (SAML) 2.0 exchanges authentication and authorisation data between an Identity Provider (IdP) and Service Providers (SPs) using XML assertions. OAuth 2.0 is an authorisation framework, not an authentication protocol, that issues access tokens to third-party applications. OpenID Connect (OIDC) builds on OAuth 2.0 to provide authentication, returning an ID token (JWT) containing user identity claims. SAML is prevalent in enterprise environments; OIDC dominates consumer and cloud applications.

### LDAP

Lightweight Directory Access Protocol (LDAP) provides centralised directory services for user and resource management. The directory is a hierarchical tree of entries, each with a Distinguished Name (DN). LDAP over SSL (LDAPS) encrypts communications. OpenLDAP and Microsoft Active Directory are common implementations. Operations include bind (authenticate), search, compare, add, modify, and delete.

### Active Directory

Active Directory (AD) is Microsoft's directory service for Windows domain networks. Kerberos is the default authentication protocol, using tickets issued by the Key Distribution Centre (KDC). The Ticket Granting Ticket (TGT) is obtained at logon and used to request service tickets. NTLM is a legacy authentication protocol retained for backward compatibility. Group Policy centrally manages user and computer settings, including password policies, software installation, and security configurations. Domain trusts enable resource access across domains. Active Directory Certificate Services (AD CS) provides PKI functionality.

### Privileged Access Management

PAM controls and monitors administrative access. Just-In-Time (JIT) access grants temporary privileges that expire automatically. Privileged accounts are isolated from normal user activities through dedicated administrative workstations. Session recording and keystroke logging provide audit trails. Password vaulting rotates administrator passwords after each use. Tiered administration, as defined by the Microsoft ESAE model, separates administrative tasks into Tier 0 (identity), Tier 1 (servers), and Tier 2 (user workstations).

### Access Control Models

Discretionary Access Control (DAC) allows resource owners to set permissions. Mandatory Access Control (MAC) enforces system-wide policies that users cannot override. Role-Based Access Control (RBAC) assigns permissions to roles and users to roles. Attribute-Based Access Control (ABAC) evaluates policies against subject, resource, and environment attributes at runtime. Relationship-Based Access Control (ReBAC) considers relationships between subjects and resources.

### Identity Lifecycle

Joiner processes provision accounts, assign initial roles, and issue credentials. Mover processes update access as users change roles, transferring group memberships and application entitlements. Leaver processes promptly disable or delete accounts, revoke certificates, and recover organisational data. Identity Governance and Administration (IGA) platforms automate these processes.

### Federation

Identity federation enables identity attributes to be shared across organisational boundaries. Trust relationships between IdPs and SPs are established through metadata exchange. Federated identities support cross-domain SSO without synchronising user directories.

## Examples

### LDAP Search Query

`ldapsearch -x -H ldap://dc.example.com -D "cn=admin,dc=example,dc=com" -W -b "dc=example,dc=com" "(objectClass=user)" cn mail memberOf`

This query binds as admin, searches for all user objects, and returns the common name, email, and group membership attributes.

### SAML Authentication Flow

A user attempts to access an SP (e.g., Salesforce). The SP redirects the user to the IdP (e.g., Azure AD) with a SAML authentication request. The user authenticates. The IdP generates a SAML assertion containing the user identity, attributes, and optional authorisation context, signed with the IdP's private key. The SP validates the signature and processes the assertion, establishing a session.

### OAuth 2.0 Authorisation Code Flow

A user clicks "Sign in with Google" on a third-party application. The application redirects to Google's authorisation endpoint with client ID, redirect URI, and requested scopes. The user consents. Google returns an authorisation code to the redirect URI. The application exchanges the code (plus client secret) for an access token at Google's token endpoint. The access token is used to call Google APIs on behalf of the user.

## Summary

Identity and Access Management ensures that the right individuals access the right resources for the right reasons. Multi-factor authentication addresses the fundamental weakness of passwords. SSO reduces credential fatigue and improves security by centralising authentication. Active Directory and LDAP provide directory services essential to enterprise environments. PAM limits the blast radius of credential theft. Access control models enforce authorisation. The identity lifecycle ensures timely provisioning and de-provisioning, closing a common audit finding.

## Exercises

### Review Questions

1. Contrast the security properties of TOTP and FIDO2. Why is FIDO2 considered phishing-resistant?
2. Describe the SAML authentication flow. What prevents a forged SAML assertion?
3. Explain the Kerberos authentication process from user logon to service access. What is the role of the TGT?
4. Compare RBAC and ABAC. In what scenarios is ABAC preferable?
5. What are the security risks of privileged accounts? How does Just-In-Time access address these risks?

### Application Problems

1. Deploy FreeIPA or OpenLDAP in a lab environment. Create organisational units, users, and groups. Configure LDAP authentication for a Linux service.
2. Configure TOTP for SSH authentication using Google Authenticator PAM module. Verify that a valid TOTP code is required after password authentication.
3. Set up an OAuth 2.0 authorisation server using a framework such as Keycloak. Register a client application, implement the authorisation code flow, and exchange the code for an access token. Validate the token with the protected resource.

### Challenge Problem

Design and implement a complete identity and access management solution for a fictional organisation with 1,000 employees, three geographic offices, a cloud-first strategy (AWS and Azure), and compliance requirements under SOC 2. The solution must include: authentication policy (password policy, MFA enforcement for administrative access), SSO integration for SaaS applications, directory synchronisation strategy, RBAC model for on-premises and cloud resources, PAM solution with JIT access, identity lifecycle automation, and federation with a partner organisation. Document the architecture, protocols, trust relationships, and policy configuration.
