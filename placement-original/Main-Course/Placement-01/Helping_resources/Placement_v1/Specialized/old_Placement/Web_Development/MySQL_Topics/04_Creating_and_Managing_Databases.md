# Creating and Managing Databases

## CREATE DATABASE Statement

The `CREATE DATABASE` statement is used to create a new database in MySQL.

### Basic Syntax
```sql
CREATE DATABASE database_name;
```

### With Character Set and Collation
```sql
CREATE DATABASE database_name
CHARACTER SET character_set_name
COLLATE collation_name;
```

### Examples
```sql
-- Create a simple database
CREATE DATABASE bookstore;

-- Create a database with specific character set and collation
CREATE DATABASE bookstore
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- Create a database only if it doesn't exist
CREATE DATABASE IF NOT EXISTS bookstore;
```

## DROP DATABASE Statement

The `DROP DATABASE` statement is used to delete an existing database.

### Basic Syntax
```sql
DROP DATABASE database_name;
```

### Examples
```sql
-- Delete a database
DROP DATABASE bookstore;

-- Delete a database only if it exists
DROP DATABASE IF EXISTS bookstore;
```

## SHOW DATABASES Command

The `SHOW DATABASES` command lists all databases on the MySQL server.

### Basic Syntax
```sql
SHOW DATABASES;
```

### Filtering Databases
```sql
-- Show databases matching a pattern
SHOW DATABASES LIKE 'book%';
```

### Example Output
```
+--------------------+
| Database           |
+--------------------+
| bookstore          |
| information_schema |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
```

## Database Character Sets and Collations

Character sets determine which characters can be stored in the database, while collations determine how characters are sorted and compared.

### Viewing Available Character Sets
```sql
SHOW CHARACTER SET;
```

### Viewing Available Collations
```sql
SHOW COLLATION;
```

### Viewing Database Character Set and Collation
```sql
SELECT DEFAULT_CHARACTER_SET_NAME, DEFAULT_COLLATION_NAME 
FROM INFORMATION_SCHEMA.SCHEMATA 
WHERE SCHEMA_NAME = 'database_name';
```

### Changing Database Character Set and Collation
```sql
ALTER DATABASE database_name 
CHARACTER SET character_set_name 
COLLATE collation_name;
```

### Common Character Sets and Collations
- **utf8mb4**: UTF-8 Unicode (4 bytes max per character)
  - **utf8mb4_general_ci**: Fast but less accurate collation
  - **utf8mb4_unicode_ci**: Better Unicode support
  - **utf8mb4_bin**: Binary comparison (case-sensitive)
- **latin1**: Latin1 (ISO 8859-1) Western European
  - **latin1_swedish_ci**: Default collation for latin1

## Database Privileges and Security

MySQL uses a privilege system to control what users can do.

### Creating a User
```sql
CREATE USER 'username'@'host' IDENTIFIED BY 'password';
```

### Granting Privileges
```sql
-- Grant all privileges on a database
GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'host';

-- Grant specific privileges
GRANT SELECT, INSERT, UPDATE, DELETE ON database_name.* TO 'username'@'host';

-- Grant privileges on specific tables
GRANT SELECT ON database_name.table_name TO 'username'@'host';
```

### Revoking Privileges
```sql
-- Revoke all privileges
REVOKE ALL PRIVILEGES ON database_name.* FROM 'username'@'host';

-- Revoke specific privileges
REVOKE DELETE ON database_name.* FROM 'username'@'host';
```

### Viewing User Privileges
```sql
SHOW GRANTS FOR 'username'@'host';
```

### Applying Changes
```sql
FLUSH PRIVILEGES;
```

## Backup and Restore Databases

### Backup Using mysqldump
```bash
# Backup a single database
mysqldump -u username -p database_name > backup_file.sql

# Backup multiple databases
mysqldump -u username -p --databases db1 db2 > backup_file.sql

# Backup all databases
mysqldump -u username -p --all-databases > backup_file.sql

# Backup structure only (no data)
mysqldump -u username -p --no-data database_name > schema_backup.sql

# Backup data only (no structure)
mysqldump -u username -p --no-create-info database_name > data_backup.sql
```

### Restore Using mysql Client
```bash
# Restore a database
mysql -u username -p database_name < backup_file.sql

# Restore multiple databases
mysql -u username -p < backup_file.sql
```

### Using mysqlimport for CSV Data
```bash
# Import CSV data
mysqlimport -u username -p --fields-terminated-by=',' database_name data_file.csv
```

## Using the mysql Command-Line Client

### Connecting to MySQL
```bash
mysql -u username -p -h hostname
```

### Selecting a Database
```sql
USE database_name;
```

### Showing Current Database
```sql
SELECT DATABASE();
```

### Executing SQL from a File
```bash
mysql -u username -p database_name < script.sql
```

### Interactive Commands
```
\h or help    - Display help
\c            - Cancel current command
\q or quit    - Exit mysql client
\G            - Display results vertically
\s            - Display server status
\! command    - Execute shell command
source file   - Execute SQL from file
```

## Database Information and Metadata

### Information Schema
The `INFORMATION_SCHEMA` database provides access to database metadata.

```sql
-- List all tables in a database
SELECT TABLE_NAME 
FROM INFORMATION_SCHEMA.TABLES 
WHERE TABLE_SCHEMA = 'database_name';

-- Get column information
SELECT COLUMN_NAME, DATA_TYPE, CHARACTER_MAXIMUM_LENGTH
FROM INFORMATION_SCHEMA.COLUMNS
WHERE TABLE_SCHEMA = 'database_name' AND TABLE_NAME = 'table_name';

-- Get constraint information
SELECT CONSTRAINT_NAME, CONSTRAINT_TYPE
FROM INFORMATION_SCHEMA.TABLE_CONSTRAINTS
WHERE TABLE_SCHEMA = 'database_name' AND TABLE_NAME = 'table_name';
```

### Status Commands
```sql
-- Show database status
SHOW TABLE STATUS FROM database_name;

-- Show create database statement
SHOW CREATE DATABASE database_name;

-- Show variables
SHOW VARIABLES LIKE 'character_set%';
SHOW VARIABLES LIKE 'collation%';
```