# Chapter 18 — Database Security

## Learning Objectives

By the conclusion of this chapter, the student will be able to: (1) describe the principal threats to database security; (2) distinguish among discretionary, mandatory, and role-based access control; (3) identify and prevent SQL injection vulnerabilities; (4) explain encryption techniques for data at rest and in transit; (5) describe database auditing mechanisms; and (6) describe GDPR compliance requirements for database systems.

## 18.1 Security Threats

Database security encompasses the protection of the database against unauthorized access, modification, destruction, and disclosure. The principal threats include the following categories.

Unauthorized access occurs when an attacker gains access to data without proper authorization. This may result from weak authentication, credential theft, or privilege escalation. Unauthorized modification involves the alteration of data by an unauthorized party, which can result in data corruption, financial fraud, or reputational damage. Denial of service attacks render the database unavailable to legitimate users through resource exhaustion or network flooding. SQL injection attacks exploit vulnerabilities in application code to execute arbitrary SQL commands. Insider threats originate from users with legitimate access who exploit their privileges for malicious purposes. Data exfiltration involves the unauthorized extraction of sensitive data, often through covert channels or compromised credentials.

## 18.2 Access Control

Discretionary Access Control (DAC) governs access based on the identity of the user and authorization rules. In SQL, DAC is implemented through the GRANT and REVOKE statements. The owner of a database object has full control and can grant privileges to other users. Privileges include SELECT, INSERT, UPDATE, DELETE, REFERENCES, and EXECUTE. The GRANT OPTION allows a user to pass privileges to others. DAC is flexible but does not prevent a user with legitimate access from propagating data to unauthorized recipients.

GRANT SELECT, INSERT ON Employee TO user_alice WITH GRANT OPTION;
REVOKE INSERT ON Employee FROM user_alice CASCADE;

Mandatory Access Control (MAC) enforces access based on classifications assigned to both subjects (users) and objects (data). Each subject has a clearance level. Each object has a classification level. A subject can read an object only if the subject's clearance is at least the object's classification. A subject can write an object only if the subject's clearance is at most the object's classification, preventing the writing of high-classification data into low-classification objects. MAC is more restrictive than DAC and is used in military and intelligence applications. The Bell-LaPadula model formalizes MAC for confidentiality, while the Biba model addresses integrity.

Role-Based Access Control (RBAC) mediates access through roles. Permissions are assigned to roles, and roles are assigned to users. RBAC simplifies administration because permissions change less frequently than personnel assignments. A user may have multiple roles, and roles may be organized hierarchically. The SQL standard supports roles through the CREATE ROLE, GRANT, and REVOKE statements.

CREATE ROLE manager;
GRANT SELECT, INSERT, UPDATE ON Employee TO manager;
GRANT manager TO user_alice;

RBAC is the dominant access control model in enterprise database systems because it balances security with administrative practicality.

## 18.3 SQL Injection Prevention

SQL injection is one of the most common and dangerous database security vulnerabilities. It occurs when user input is incorporated into SQL statements without proper sanitization, allowing an attacker to modify the query structure.

Consider a login query constructed as follows:

query = "SELECT * FROM Users WHERE username = '" + username + "' AND password = '" + password + "'";

If an attacker provides the username admin' --, the query becomes:

SELECT * FROM Users WHERE username = 'admin' --' AND password = '';

The comment operator -- removes the password check, allowing the attacker to log in as admin without knowing the password. More dangerous injection attacks can modify data, execute stored procedures, or read arbitrary tables.

Prevention strategies include the following. Parameterized queries, also called prepared statements, separate SQL code from data. Placeholders in the SQL statement are bound to parameter values by the database driver, which automatically escapes special characters. Stored procedures can encapsulate SQL logic and accept parameters without dynamic query construction. Input validation rejects or sanitizes values that do not match expected patterns. The principle of least privilege ensures that database accounts used by applications have only the minimum necessary permissions.

Parameterized query example in Java:

PreparedStatement pstmt = connection.prepareStatement(
    "SELECT * FROM Users WHERE username = ? AND password = ?"
);
pstmt.setString(1, username);
pstmt.setString(2, password);

## 18.4 Encryption

Encryption protects data from unauthorized access even when other security mechanisms are bypassed. Transparent Data Encryption (TDE) encrypts the entire database at the storage level. Data is automatically encrypted when written to disk and decrypted when read into memory. TDE protects against media theft, backup compromise, and unauthorized file access. TDE operates below the database engine and is transparent to applications.

Column-level encryption encrypts specific sensitive columns, such as social security numbers or credit card numbers. The application or database engine encrypts the value before storage and decrypts it on retrieval. Column-level encryption provides finer granularity than TDE but requires key management infrastructure and may affect query performance because encrypted columns cannot be indexed efficiently.

Encryption in transit protects data as it travels between the database and clients. TLS (Transport Layer Security) encrypts the network connection. Most database protocols support TLS encryption, and many regulatory frameworks require it.

Key management is the most challenging aspect of database encryption. Encryption keys must be stored separately from encrypted data, rotated periodically, and protected against unauthorized access. Hardware security modules (HSMs) provide tamper-resistant key storage. Key vault services, such as AWS KMS and Azure Key Vault, offer managed key management.

## 18.5 Auditing

Database auditing records and monitors database activity for security analysis, compliance reporting, and forensic investigation. Audit logs capture events such as login attempts, data modifications, schema changes, and privilege grants. The audit trail provides evidence for investigating security incidents and demonstrating regulatory compliance.

Fine-grained auditing allows selective monitoring of specific operations on specific objects. For example, an auditor might monitor all SELECT statements on the Patient table or all GRANT statements by any user.

Audit records should be stored in a secure, append-only location that is separate from the audited database. Audit log tampering must be detectable. Many compliance frameworks require that audit logs be retained for specified periods, often several years.

Automated audit analysis detects anomalous patterns that may indicate security incidents. Unusual login times, repeated failed authentication attempts, bulk data extraction, and privilege escalation attempts are common audit-based detection signals.

## 18.6 GDPR Compliance

The General Data Protection Regulation (GDPR) imposes requirements on any organization that processes the personal data of European Union residents. GDPR compliance affects database design and administration in several areas.

The right to erasure, also called the right to be forgotten, requires that organizations delete personal data upon request. Database schemas must support efficient deletion of all data associated with a specific individual. Cascade deletion rules must be carefully designed to avoid integrity violations.

Data minimization requires that organizations collect and retain only the personal data necessary for the specified purpose. Database schemas should not include optional personal data fields that are not needed. Retention policies must be implemented to purge data that has reached its retention limit.

Pseudonymization and anonymization reduce the risk of processing personal data. Pseudonymization replaces identifying fields with artificial identifiers, allowing data processing without direct identification. Anonymization irreversibly removes identifying information, transforming the data so that individuals cannot be re-identified.

Data portability requires that organizations provide personal data in a structured, commonly used, machine-readable format upon request. Database systems must support exporting data in formats such as JSON or CSV.

Breach notification requires that organizations report personal data breaches to supervisory authorities within 72 hours. Database audit logs and monitoring systems must provide sufficient information to determine the scope and impact of a breach.

## Summary

Database security is a multi-layered discipline encompassing access control, input validation, encryption, auditing, and regulatory compliance. Access control models range from simple discretionary grants to mandatory classification systems. SQL injection remains a prevalent vulnerability that is entirely preventable through parameterized queries. Encryption protects data at rest and in transit. Auditing provides accountability. GDPR compliance imposes specific requirements on database systems that process personal data.

## Exercises

### Review Questions

1. How does RBAC simplify database security administration compared to DAC?
2. What is the principle of least privilege, and how does it relate to database security?
3. Why does column-level encryption prevent efficient indexing?
4. What events should be captured in a database audit log?
5. What is data pseudonymization and how does it differ from anonymization?

### Application Problems

1. Design an RBAC scheme for a hospital database containing tables for Patients, Doctors, Appointments, MedicalRecords, and Billing. Define roles for Doctor, Nurse, Administrator, and BillingStaff. Specify the permissions each role should have. Explain your reasoning.
2. The following PHP code is vulnerable to SQL injection. Rewrite it using parameterized queries:

$name = $_GET['name'];
$result = mysql_query("SELECT * FROM Products WHERE name LIKE '%$name%'");

3. Design a database audit policy for a financial application. Specify which operations on which tables should be audited, how the audit logs should be protected, and how long they should be retained. Explain how you would detect a data exfiltration attempt from the audit logs.

### Challenge Problem

Design a comprehensive database security architecture for a multi-tenant SaaS application. Each tenant's data must be isolated from other tenants. The architecture must address authentication, access control, encryption (at rest and in transit), SQL injection prevention, auditing, and GDPR compliance. Compare the advantages and disadvantages of three isolation strategies: separate databases per tenant, separate schemas with shared database, and row-level security within shared tables. Recommend the appropriate strategy for a healthcare SaaS application and justify your recommendation.
